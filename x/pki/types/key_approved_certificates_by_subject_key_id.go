package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ApprovedCertificatesBySubjectKeyIdKeyPrefix is the prefix to retrieve all ApprovedCertificatesBySubjectKeyId
	ApprovedCertificatesBySubjectKeyIdKeyPrefix = "ApprovedCertificatesBySubjectKeyId/value/"
)

// ApprovedCertificatesBySubjectKeyIdKey returns the store key to retrieve a ApprovedCertificatesBySubjectKeyId from the index fields
func ApprovedCertificatesBySubjectKeyIdKey(
	subjectKeyId string,
) []byte {
	var key []byte

	subjectKeyIdBytes := []byte(subjectKeyId)
	key = append(key, subjectKeyIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
