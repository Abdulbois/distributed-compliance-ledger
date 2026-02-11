This document describes how to map schemas (DCL main records/entities) against the CHIP specification.


## PKI Module
1. The Product Attestation Authority Certificate and the Intermediate Certificate Schemas mentioned in the CHIP spec correspond to 
 this [explanation](transactions.md#x509-pki)(see `Work for DA certificate types (PAA, PAI)` section)
2. Operational Trust Anchors Schema mentioned in CHIP spec correspond to this [explanation](transactions.md#x509-pki)(see `Work for NOC certificate types (RCAC, ICAC)` section)
   
    **Note**: DCL terms like NOC and ICA are mentioned in DCL maps to RCAC and ICAC in CHIP spec respectively.
3. For all certificate schemas mentioned in CHIP spec, DCL uses only single [Certificate](../proto/zigbeealliance/distributedcomplianceledger/pki/certificate.proto) Schema.
4. The Device Attestation PKI Revocation Distribution Points mentioned in the CHIP spec implemented within PKI Module and correspond to this [explanation](transactions.md#x509-pki)(see rows which mentions addition/retrieving revocation points)