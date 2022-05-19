---
title:  NIFI secret recovery
authors: e11it
tags: [nifi,recovery]
---

Случилась тут необходимость восстановить пароли от jks файлов, на которые ссылались контроллеры в NIFI.

Очень помогла статья: [Apache Nifi Sensitive Value Encryption](https://www.dreamincode.net/forums/blog/324/entry-5080-apache-nifi-sensitive-value-encryption/)

Все описанное работает, если в nifi.properites:
nifi.sensitive.props.algorithm=PBEWITHMD5AND256BITAES-CBC-OPENSSL


Итого по шагам:
- ищем flow.tag.gz
- ищем зашифрованные пароль вида: `<value>enc{AE06E2E77C38A0EA899DB37FB7F6E05FFBA6529B2E9F90C914962FF2DD594020}</value>`
- содержимое между фигурными скобками enc сохраняем в файл, в нашем случае это строка `AE06AE06..4020`
- смотрим ключ шифрования в nifi.properites, атрибут `nifi.sensitive.props.key`
- выполянем `./decrypt_sensitive.rb -i /path/to/file -p $nifi.sensitive.props.key`

Вывод должен быть похож на(зашифрованный пароль - `NewPasswordTest`):
```
/decrypt_sensitive.rb -i enc_1 -p testpassword
Master passphrase: testpassword
Salt: AE06E2E77C38A0EA899DB37FB7F6E05F 16
Payload: FBA6529B2E9F90C914962FF2DD594020

Output of EVP_BytesToKey
Hex key: 2fb794e8adf21b2aa960c8e87caa74d411ffcba2369b5dac38726c10437c6249 32
Hex IV: b4103a85d1ece0eacba1ef327058da1d 16

Plaintext decrypted: NewPasswordTest
```

```ruby title="decrypt_sensitive.rb"
#!/usr/bin/env ruby

require 'openssl'
require 'getoptlong'

#This script will attempt to decrypt sensitive values in Apache NiFi's flow.xml
#See the HELP block below for more information

def bin_to_hex(s)
  s.each_byte.map { |b| b.to_s(16).rjust(2, '0') }.join
end

def evp_bytes_to_key(key_len, iv_len, md, salt, data, count)
  key = ''.bytes
  key_ix = 0
  iv = ''.bytes
  iv_ix = 0
  md_buf = ''.bytes
  n_key = key_len
  n_iv = iv_len
  i = 0
  salt_length = salt.length
  if data == nil
    return [key, iv]
  end
  add_md = 0
  while true
    md.reset
    if add_md > 0
      md.update md_buf
    end
    add_md += 1
    md.update data
    if nil != salt
      md.update salt[0..salt_length-1]
    end
    md_buf = md.digest
    (1..count-1).each do
      md.reset
      md.update md_buf
      md_buf = md.digest
    end
    i = 0
    if n_key > 0
      while true
        if n_key == 0
          break
        end
        if i == md_buf.length
          break
        end
        key[key_ix] = md_buf[i]
        key_ix += 1
        n_key -= 1
        i += 1
      end
    end
    if n_iv > 0 && i != md_buf.length
      while true
        if n_iv == 0
          break
        end
        if i == md_buf.length
          break
        end
        iv[iv_ix] = md_buf[i]
        iv_ix += 1
        n_iv -= 1
        i += 1
      end
    end
    if n_key == 0 && n_iv == 0
      break
    end
  end
  (0..md_buf.length-1).each do |j|
    md_buf[j] = '0'
  end
  [key, iv]
end

HELP=<<ENDHELP
Usage: ./decrypt_sensitive.rb -i /path/to/file -p[optional]

  --help,-h Print this help message
  -i        path to input file that is hex string inside of "enc{}" from the flow.xml
  -p        passphrase from nifi.properties: "nifi.sensitive.props.key"
            if not provided it will default to "nififtw!"

  This program will attempt to decrypt sensitive configuration items from the flow.xml
  in a NiFi instance. Hex encoding is 16 byte salt and the remainder is the ciphertext.
ENDHELP

opts = GetoptLong.new(
  ["--help","-h", GetoptLong::NO_ARGUMENT],
  ["-i", GetoptLong::REQUIRED_ARGUMENT],
  ["-p", GetoptLong::REQUIRED_ARGUMENT]
)


if ARGV.length < 1
  puts HELP
  exit
end

path = nil
master_passphrase = nil

opts.each do |opt, arg|
  case opt
    when "--help"
      puts HELP
      exit
    when "-i"
      path = arg
    when "-p"
      master_passphrase = arg
  end
end

master_passphrase = "nififtw!" unless master_passphrase != nil
puts "Master passphrase: #{master_passphrase}"

payload = File.read(path).strip

#this is the first 16 bytes of the enc {} nonsense in the flow.xml
master_salt = payload[0..31]
payload_bytes = [payload[32..-1].strip].pack('H*')

puts "Salt: #{master_salt} 16"
puts "Payload: #{payload[32..-1].strip}"

cipher = OpenSSL::Cipher.new 'AES-256-CBC'
cipher.decrypt

# If the salt was 8 bytes, this would work, but NiFi Jasypt uses a 16 byte salt
# This is the OpenSSL implementation
# cipher.pkcs5_keyivgen master_passphrase, master_salt, 1, OpenSSL::Digest::MD5.new

iterations = 1
(key, iv) = evp_bytes_to_key cipher.key_len, cipher.iv_len, OpenSSL::Digest::MD5.new, [master_salt].pack('H*'), master_passphrase, iterations

key = key.join
iv = iv.join

hex_key = bin_to_hex(key)
hex_iv = bin_to_hex(iv)

puts ""
puts "Output of EVP_BytesToKey"
puts "Hex key: #{hex_key} #{key.length}"
puts "Hex  IV: #{hex_iv} #{iv.length}"

puts ""

cipher.key = key
cipher.iv = iv

#decrypted = cipher.update plaintext
decrypted = cipher.update(payload_bytes)
decrypted << cipher.final

puts "Plaintext decrypted: #{decrypted}"
```
