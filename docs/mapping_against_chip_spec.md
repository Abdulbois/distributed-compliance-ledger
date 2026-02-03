This document describes how to map schemas (DCL main records/entities) against the CHIP specification.


## PKI Module
1. Product Attestation Authority Certificate and Intermediate Certificate Schemas mentioned in CHIP spec maps to 
 this [guideline](transactions.md#x509-pki)(see `Work for DA certificate types (PAA, PAI)` section)
2. Operational Trust Anchors Schema mentioned in CHIP spec maps to this [guideline](transactions.md#x509-pki)(see `Work for NOC certificate types (RCAC, ICAC)` section)
   
    **Note**: DCL terms like NOC and ICA are mentioned in guideline maps to RCAC and ICAC in CHIP spec respectively.
3. For all certificate schemas mentioned in CHIP spec, DCL uses only single [Certificate](../proto/zigbeealliance/distributedcomplianceledger/pki/certificate.proto) Schema.

    The following list describes the differences of Certificate Schema between CHIP spec and DCL schema:
   - DCL has extra field `SubjectAsText` to display a certificate subject in human-readable format.
   - `IsVidVerificationSigner` field in CHIP maps to `CertificationType` field in DCL.
     - If `CertificationType` equals to `VIDSignerPKI` it means that the `IsVidVerificationSigner` field is set to `true`.
     - If `CertificationType` equals to `OperationalPKI` or `DeviceAttestationPKI` it means that the `IsVidVerificationSigner` field is set to `false`.
   - `GrantApprovals` and `GrantRejects` fields in CHIP spec maps to `Approvals` and `Rejects` fields in DCL.
     - Additional to DCL Keys, DCL also stores info about time and description of approval/rejection. See [Grant](../proto/zigbeealliance/distributedcomplianceledger/pki/grant.proto) Schema for details.
