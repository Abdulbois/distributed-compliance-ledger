# Mapping DCL Schemas to Matter Specification

This document describes how DCL records and entities map to the CHIP/Matter specification.

## PKI Module

1. **Device Attestation (DA):** The Product Attestation Authority (PAA) and Intermediate (PAI) certificate schemas correspond to the [DA certificate types section](transactions.md#x509-pki).
2. **Operational Trust Anchors:** The schemas for Operational Certificates correspond to the [NOC certificate types section](transactions.md#x509-pki).
    *   **Note:** DCL uses the terms **NOC** and **ICA**, which map to **RCAC** and **ICAC** in the Matter specification, respectively.
3. **Unified Schema:** DCL uses a single [Certificate](../proto/zigbeealliance/distributedcomplianceledger/pki/certificate.proto) schema for all certificate types mentioned in the Matter specification.
4. **Revocation:** Device Attestation PKI Revocation Distribution Points are implemented within the PKI Module as described in the [revocation points section](transactions.md#x509-pki).