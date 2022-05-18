---
title: Encription as a service
authors: e11it
tags: [kms, hashicrorp, vault]
---

# KMS

Очень не хватает в компании KMS: сервиса, который бы позволял шифровать данные в БД, Kafka, при этом, чтобы сами данные оставались в источниках, а не в Vault.

Накидал несоклько статей на эту тему.
Hashicorp:
https://learn.hashicorp.com/tutorials/vault/eaas-transit
https://github.com/hashicorp/go-kms-wrapping
https://www.vaultproject.io/docs/secrets/transit

Minio:
https://github.com/minio/kes

AWS:
- https://docs.aws.amazon.com/kms/latest/developerguide/overview.html
- https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/kms.html


У Hashicorp уже все готово(как всегда)...
