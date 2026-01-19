package keeper_test

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	x509std "crypto/x509"
	"testing"

	"github.com/stretchr/testify/require"
	testconstants "github.com/zigbee-alliance/distributed-compliance-ledger/integration_tests/constants"
	pkitypes "github.com/zigbee-alliance/distributed-compliance-ledger/types/pki"
	"github.com/zigbee-alliance/distributed-compliance-ledger/x/pki/keeper"
	"github.com/zigbee-alliance/distributed-compliance-ledger/x/pki/x509"
)

func TestMsgAddPkiRevocationDistributionPoint_verifyCRLCertFormat(t *testing.T) {
	negativeTests := []struct {
		name string
		init func(*x509.Certificate)
		err  error
	}{
		{
			name: "empty subject-key-id",
			init: func(certificate *x509.Certificate) {
				certificate.SubjectKeyID = ""
			},
			err: pkitypes.ErrWrongSubjectKeyIDFormat,
		},
		{
			name: "version is not v3",
			init: func(certificate *x509.Certificate) {
				certificate.Certificate.Version = 2
			},
			err: pkitypes.ErrCRLSignerCertificateInvalidFormat,
		},
		{
			name: "SignatureAlgorithm is not ECDSAWithSHA256",
			init: func(certificate *x509.Certificate) {
				certificate.Certificate.SignatureAlgorithm = x509std.ECDSAWithSHA384
			},
			err: pkitypes.ErrCRLSignerCertificateInvalidFormat,
		},
		{
			name: "PublicKey is not use prime256v1 curve",
			init: func(certificate *x509.Certificate) {
				ecdsaPubKey, _ := certificate.Certificate.PublicKey.(*ecdsa.PublicKey)
				ecdsaPubKey.Curve = elliptic.P224()
				certificate.Certificate.PublicKey = ecdsaPubKey
			},
			err: pkitypes.ErrCRLSignerCertificateInvalidFormat,
		},
		{
			name: "Key Usage extension is not critical",
			init: func(certificate *x509.Certificate) {
				certificate.Certificate.Extensions[3].Critical = false
			},
			err: pkitypes.ErrCRLSignerCertificateInvalidFormat,
		},
		{
			name: "The cRLSign bits is not in the KeyUsage bitstring",
			init: func(certificate *x509.Certificate) {
				certificate.Certificate.KeyUsage = x509std.KeyUsageCertSign
			},
			err: pkitypes.ErrCRLSignerCertificateInvalidFormat,
		},
		{
			name: "Other Key Usage bits expect KeyUsageCRLSign and KeyUsageDigitalSignature is not be set",
			init: func(certificate *x509.Certificate) {
				certificate.Certificate.KeyUsage = x509std.KeyUsageCertSign | x509std.KeyUsageCRLSign | x509std.KeyUsageDigitalSignature
			},
			err: pkitypes.ErrCRLSignerCertificateInvalidFormat,
		},
	}

	for _, tt := range negativeTests {
		t.Run(tt.name, func(t *testing.T) {
			cert, err := x509.DecodeX509Certificate(testconstants.LeafCertWithVid)
			require.NoError(t, err)

			tt.init(cert)

			err = keeper.VerifyCRLSignerCertFormat(cert)
			require.Error(t, err)
			require.ErrorIs(t, err, tt.err)
		})
	}

	// Positive case
	cert, err := x509.DecodeX509Certificate(testconstants.LeafCertWithVid)
	require.NoError(t, err)

	err = keeper.VerifyCRLSignerCertFormat(cert)
	require.NoError(t, err)
}
