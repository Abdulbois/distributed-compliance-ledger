// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: model/model_versions.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type ModelVersions struct {
	Vid              int32    `protobuf:"varint,1,opt,name=vid,proto3" json:"vid,omitempty"`
	Pid              int32    `protobuf:"varint,2,opt,name=pid,proto3" json:"pid,omitempty"`
	SoftwareVersions []uint64 `protobuf:"varint,3,rep,packed,name=software_versions,json=softwareVersions,proto3" json:"software_versions,omitempty"`
	Creator          string   `protobuf:"bytes,4,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *ModelVersions) Reset()         { *m = ModelVersions{} }
func (m *ModelVersions) String() string { return proto.CompactTextString(m) }
func (*ModelVersions) ProtoMessage()    {}
func (*ModelVersions) Descriptor() ([]byte, []int) {
	return fileDescriptor_f2ffc766b6a650e7, []int{0}
}
func (m *ModelVersions) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ModelVersions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ModelVersions.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ModelVersions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ModelVersions.Merge(m, src)
}
func (m *ModelVersions) XXX_Size() int {
	return m.Size()
}
func (m *ModelVersions) XXX_DiscardUnknown() {
	xxx_messageInfo_ModelVersions.DiscardUnknown(m)
}

var xxx_messageInfo_ModelVersions proto.InternalMessageInfo

func (m *ModelVersions) GetVid() int32 {
	if m != nil {
		return m.Vid
	}
	return 0
}

func (m *ModelVersions) GetPid() int32 {
	if m != nil {
		return m.Pid
	}
	return 0
}

func (m *ModelVersions) GetSoftwareVersions() []uint64 {
	if m != nil {
		return m.SoftwareVersions
	}
	return nil
}

func (m *ModelVersions) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*ModelVersions)(nil), "zigbeealliance.distributedcomplianceledger.model.ModelVersions")
}

func init() { proto.RegisterFile("model/model_versions.proto", fileDescriptor_f2ffc766b6a650e7) }

var fileDescriptor_f2ffc766b6a650e7 = []byte{
	// 246 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xca, 0xcd, 0x4f, 0x49,
	0xcd, 0xd1, 0x07, 0x93, 0xf1, 0x65, 0xa9, 0x45, 0xc5, 0x99, 0xf9, 0x79, 0xc5, 0x7a, 0x05, 0x45,
	0xf9, 0x25, 0xf9, 0x42, 0x06, 0x55, 0x99, 0xe9, 0x49, 0xa9, 0xa9, 0x89, 0x39, 0x39, 0x99, 0x89,
	0x79, 0xc9, 0xa9, 0x7a, 0x29, 0x99, 0xc5, 0x25, 0x45, 0x99, 0x49, 0xa5, 0x25, 0xa9, 0x29, 0xc9,
	0xf9, 0xb9, 0x05, 0x10, 0xd1, 0x9c, 0xd4, 0x94, 0xf4, 0xd4, 0x22, 0x3d, 0xb0, 0x01, 0x4a, 0x55,
	0x5c, 0xbc, 0xbe, 0x20, 0x46, 0x18, 0xd4, 0x20, 0x21, 0x01, 0x2e, 0xe6, 0xb2, 0xcc, 0x14, 0x09,
	0x46, 0x05, 0x46, 0x0d, 0xd6, 0x20, 0x10, 0x13, 0x24, 0x52, 0x90, 0x99, 0x22, 0xc1, 0x04, 0x11,
	0x29, 0xc8, 0x4c, 0x11, 0xd2, 0xe6, 0x12, 0x2c, 0xce, 0x4f, 0x2b, 0x29, 0x4f, 0x2c, 0x4a, 0x85,
	0xbb, 0x40, 0x82, 0x59, 0x81, 0x59, 0x83, 0x25, 0x48, 0x00, 0x26, 0x01, 0x37, 0x50, 0x82, 0x8b,
	0x3d, 0xb9, 0x28, 0x35, 0xb1, 0x24, 0xbf, 0x48, 0x82, 0x45, 0x81, 0x51, 0x83, 0x33, 0x08, 0xc6,
	0x75, 0x4a, 0x38, 0xf1, 0x48, 0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27,
	0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0xb7, 0xf4, 0xcc,
	0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0x7d, 0x88, 0x97, 0x74, 0x61, 0x7e, 0xd2, 0x47,
	0xf2, 0x93, 0x2e, 0xc2, 0x53, 0xba, 0x10, 0x5f, 0xe9, 0x57, 0x40, 0x02, 0x46, 0xbf, 0xa4, 0xb2,
	0x20, 0xb5, 0x38, 0x89, 0x0d, 0x1c, 0x2c, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb4, 0x54,
	0x65, 0xa0, 0x34, 0x01, 0x00, 0x00,
}

func (m *ModelVersions) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ModelVersions) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ModelVersions) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintModelVersions(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.SoftwareVersions) > 0 {
		dAtA2 := make([]byte, len(m.SoftwareVersions)*10)
		var j1 int
		for _, num := range m.SoftwareVersions {
			for num >= 1<<7 {
				dAtA2[j1] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j1++
			}
			dAtA2[j1] = uint8(num)
			j1++
		}
		i -= j1
		copy(dAtA[i:], dAtA2[:j1])
		i = encodeVarintModelVersions(dAtA, i, uint64(j1))
		i--
		dAtA[i] = 0x1a
	}
	if m.Pid != 0 {
		i = encodeVarintModelVersions(dAtA, i, uint64(m.Pid))
		i--
		dAtA[i] = 0x10
	}
	if m.Vid != 0 {
		i = encodeVarintModelVersions(dAtA, i, uint64(m.Vid))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintModelVersions(dAtA []byte, offset int, v uint64) int {
	offset -= sovModelVersions(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ModelVersions) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Vid != 0 {
		n += 1 + sovModelVersions(uint64(m.Vid))
	}
	if m.Pid != 0 {
		n += 1 + sovModelVersions(uint64(m.Pid))
	}
	if len(m.SoftwareVersions) > 0 {
		l = 0
		for _, e := range m.SoftwareVersions {
			l += sovModelVersions(uint64(e))
		}
		n += 1 + sovModelVersions(uint64(l)) + l
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovModelVersions(uint64(l))
	}
	return n
}

func sovModelVersions(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozModelVersions(x uint64) (n int) {
	return sovModelVersions(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ModelVersions) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowModelVersions
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ModelVersions: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ModelVersions: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Vid", wireType)
			}
			m.Vid = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowModelVersions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Vid |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pid", wireType)
			}
			m.Pid = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowModelVersions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Pid |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType == 0 {
				var v uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowModelVersions
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.SoftwareVersions = append(m.SoftwareVersions, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowModelVersions
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthModelVersions
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthModelVersions
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				var count int
				for _, integer := range dAtA[iNdEx:postIndex] {
					if integer < 128 {
						count++
					}
				}
				elementCount = count
				if elementCount != 0 && len(m.SoftwareVersions) == 0 {
					m.SoftwareVersions = make([]uint64, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowModelVersions
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.SoftwareVersions = append(m.SoftwareVersions, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field SoftwareVersions", wireType)
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowModelVersions
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthModelVersions
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthModelVersions
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipModelVersions(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthModelVersions
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipModelVersions(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowModelVersions
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowModelVersions
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowModelVersions
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthModelVersions
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupModelVersions
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthModelVersions
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthModelVersions        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowModelVersions          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupModelVersions = fmt.Errorf("proto: unexpected end of group")
)
