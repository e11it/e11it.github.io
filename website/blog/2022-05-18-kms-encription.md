---
title: Encription as a service
authors: e11it
tags: [kms, hashicrorp, vault]
---

Очень не хватает в компании KMS: сервиса, который бы позвoлял шифровать данные в БД, Kafka. 
Но чтобы сами данные оставались в источниках, а не в Vault.


Собрал несоклько статей на эту тему.
* Hashicorp:
  - https://learn.hashicorp.com/tutorials/vault/eaas-transit
  - https://github.com/hashicorp/go-kms-wrapping
  - https://www.vaultproject.io/docs/secrets/transit
* Minio:
  - https://github.com/minio/kes
* AWS:
  - https://docs.aws.amazon.com/kms/latest/developerguide/overview.html
  - https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/kms.html


У Hashicorp уже все готово(как всегда).

Из открытых вопросов, это бекап данных и\или ключей. 
Так же, как избежать ddos Vault, можно ли его масштабировать или только один узел будет обрабатывать(наверное да?).

Возможно, надо будет по аналогии с kes(от minio), выносить расшифровку в отдельный сервис и сделать более простой rest интерфейс.
