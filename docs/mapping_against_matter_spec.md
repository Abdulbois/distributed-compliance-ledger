# Mapping DCL Schemas to Matter Specification

This document describes how DCL records and entities map to the CHIP/Matter [specification](https://github.com/CHIP-Specifications/connectedhomeip-spec/blob/master/src/service_device_management/DistributedComplianceLedger.adoc#ref_DistributedComplianceLedger).

In DCL, different schemas and respective endpoints are used for write(txn messages) and read(query calls) requests, but the CHIP/Matter specification describes only what was written and assumes that
read requests are the same. To know about how write and read requests maps to spec please follow below sections for more details.

## PKI Module

1. **Device Attestation (DA):** The Product Attestation Authority (PAA) and Intermediate (PAI) certificate [schemas](https://github.com/CHIP-Specifications/connectedhomeip-spec/blob/master/src/service_device_management/DistributedComplianceLedger.adoc#ref_PAAAndPAICertificateSchema) correspond to the [DA certificate types section](transactions.md#x509-pki).
2. **Operational Trust Anchors:** The [schemas](https://github.com/CHIP-Specifications/connectedhomeip-spec/blob/master/src/service_device_management/DistributedComplianceLedger.adoc#5-operational-trust-anchors-schema) for Operational Certificates correspond to the [NOC certificate types section](transactions.md#x509-pki).
    *   **Note:** DCL uses the terms **NOC** and **ICA**, which map to **RCAC** and **ICAC** in the Matter specification, respectively.
3. **Unified Schema:** DCL uses a single [Certificate](../proto/zigbeealliance/distributedcomplianceledger/pki/certificate.proto) schema for all certificate types mentioned in the Matter specification.
4. **Revocation:** Device Attestation PKI Revocation Distribution Points [schema](https://github.com/CHIP-Specifications/connectedhomeip-spec/blob/master/src/service_device_management/DistributedComplianceLedger.adoc#9-device-attestation-pki-revocation-distribution-points-schema) are implemented within the PKI Module as described in the [revocation points section](transactions.md#x509-pki).