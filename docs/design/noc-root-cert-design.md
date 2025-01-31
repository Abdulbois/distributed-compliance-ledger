# NOC Root Certificate Transactions Design

## User Stories

### 1. Add NOC Root Certificate
A Vendor with DCL write privilege can submit a transaction to add a NOC Root certificate associated with their Vendor ID.

### 2. Revoke NOC Root Certificate
A Vendor with DCL write privilege can submit a transaction to revoke a NOC Root certificate associated with their Vendor ID.

## Certificate Schema

To distinguesh NOC root certificates from others, an `isNOC` boolean field will be added to the [certificates](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/proto/pki/certificate.proto) schema 

## Transactions

### 1. ADD_NOC_X509_ROOT_CERTIFICATE
This transaction adds a NOC Root Certificate owned by the Vendor.

- Who can send: Vendor account
  - VID-scoped NOC Root Certificate: The `vid` field in the certificate's subject must be equal to the Vendor account's VID.
- Validation:
  - The provided certificate must be a root certificate:
    - `Issuer` == `Subject`
    - `Authority Key Identifier` == `Subject Key Identifier`
  - No existing certificate with the same `<Certificate's Issuer>:<Certificate's Serial Number>` combination.
  - If certificates with the same `<Certificate's Subject>:<Certificate's Subject Key ID>` combination already exist:
    - The sender must match the owner of the existing certificates.
  - The signature (self-signature) and expiration date must be valid.
- Parameters:
  - cert: `string` - The NOC Root Certificate, encoded in X.509v3 PEM format. Can be a PEM string or a file path.
- In State:
  - `pki/ApprovedCertificates/value/<Subject>/<SubjectKeyID>`
  - `pki/NOCRootCertificates/value/<VID>`
- CLI Command:
  - `dcld tx pki add-noc-x509-root-cert --certificate=<string-or-path> --from=<account>`

### 2. REVOKE_NOC_X509_ROOT_CERTIFICATE
This transaction revokes a NOC Root Certificate owned by the Vendor.

- Who can send: Vendor account
  - VID-scoped NOC Root Certificate: The `vid` field in the certificate's subject must be equal to the Vendor account's VID.
- Validation:
  - A NOC Root Certificate with the provided `subject` and `subject_key_id` must exist in the ledger.
- Parameters:
  - subject: `string` - Base64 encoded subject DER sequence bytes of the certificate.
  - subject_key_id: `string` - Certificate's `Subject Key Id` in hex string format, e.g., `5A:88:0E:6C:36:53:D0:7F:B0:89:71:A3:F4:73:79:09:30:E6:2B:DB`.
- In State:
  - `pki/RevokedNOCRootCertificates/value/<subject>/<subject_key_id>`
- CLI Command:
  - `dcld tx pki revoke-noc-x509-root-cert --subject=<base64 string> --subject-key-id=<hex string> --from=<account>`

## Query

To retrieve NOC certificates by Subject and Subject Key Identifier, use the [GET_X509_CERT](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/docs/transactions.md#get_x509_cert) or [GET_ALL_SUBJECT_X509_CERTS](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/docs/transactions.md#get_all_subject_x509_certs:) query.

### GET_NOC_X509_ROOT_CERTS_BY_VID

Retrieve NOC Root Certificates associated with a specific VID. 

- Who can send: Any account
- Parameters:
  - vid: `uint16` - Vendor ID (positive non-zero)
- CLI Command:
  - `dcld query pki get_noc_x509_root_certs --vid=<uint16>`
- REST API:
  - GET `/dcl/pki/noc-root-certificates/{vid}`

### GET_ALL_NOC_X509_ROOT_CERTS

Retrieve a list of all of NOC Root Certificates

- Who can send: Any account
- Parameters:
  - Common pagination parameters
- CLI Command:
  - `dcld query pki get_all_noc_x509_root_certs
- REST API:
  - GET `/dcl/pki/noc-root-certificates`

### GET_REVOKED_NOC_X509_ROOT_CERTS

Retrieve revoked NOC Root Certificates associated with a specific Subject and Subject Key Identifier.

- Who can send: Any account
- Parameters:
  - subject: `string` - Base64 encoded subject DER sequence bytes of the certificate.
  - subject_key_id: `string` - Certificate's `Subject Key Id` in hex string format, e.g., `5A:88:0E:6C:36:53:D0:7F:B0:89:71:A3:F4:73:79:09:30:E6:2B:DB`.
- CLI Command:
  - `dcld query pki get_revoked_noc_x509_root_certs
- REST API:
  - GET `/dcl/pki/revoked-noc-root-certificates/{subject}/{subject_key_id}`

## Questions
- Should the vendor add a revocation distribution point for NOC certificates?
- Should the following queries return NOC Certificate?
  - [GET_ALL_SUBJECT_X509_CERTS](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/docs/transactions.md#get_all_subject_x509_certs)
  - [GET_ALL_X509_ROOT_CERTS](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/docs/transactions.md#get_all_x509_root_certs)
  - [GET_X509_CERT](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/docs/transactions.md#get_x509_cert)
- Should an additional field be added to the certificate schema to distinguish NOC certificates from common PAAs/PAIs?
- Should a revoked NOC Root Certificate be stored in the revoked list, or should it be completely removed? Additionally, if a NOC Root Certificate is revoked, should it be returned in the existing [GET_ALL_REVOKED_X509_ROOT_CERTS](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/docs/transactions.md#get_all_revoked_x509_root_certs) and [GET_REVOKED_CERT](https://github.com/zigbee-alliance/distributed-compliance-ledger/blob/master/docs/transactions.md#get_revoked_cert) queries?