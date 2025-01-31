package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	pkitypes "github.com/zigbee-alliance/distributed-compliance-ledger/types/pki"
	"github.com/zigbee-alliance/distributed-compliance-ledger/utils/validator"
)

const TypeMsgDeletePkiRevocationDistributionPoint = "delete_pki_revocation_distribution_point"

var _ sdk.Msg = &MsgDeletePkiRevocationDistributionPoint{}

func NewMsgDeletePkiRevocationDistributionPoint(signer string, vid int32, label string, issuerSubjectKeyID string) *MsgDeletePkiRevocationDistributionPoint {
	return &MsgDeletePkiRevocationDistributionPoint{
		Signer:             signer,
		Vid:                vid,
		Label:              label,
		IssuerSubjectKeyID: issuerSubjectKeyID,
	}
}

func (msg *MsgDeletePkiRevocationDistributionPoint) Route() string {
	return pkitypes.RouterKey
}

func (msg *MsgDeletePkiRevocationDistributionPoint) Type() string {
	return TypeMsgDeletePkiRevocationDistributionPoint
}

func (msg *MsgDeletePkiRevocationDistributionPoint) GetSigners() []sdk.AccAddress {
	signer, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		panic(err)
	}

	return []sdk.AccAddress{signer}
}

func (msg *MsgDeletePkiRevocationDistributionPoint) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)

	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePkiRevocationDistributionPoint) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return pkitypes.NewErrInvalidAddress(err)
	}

	err = validator.Validate(msg)
	if err != nil {
		return err
	}

	match := VerifyRevocationPointIssuerSubjectKeyIDFormat(msg.IssuerSubjectKeyID)

	if !match {
		return pkitypes.NewErrWrongSubjectKeyIDFormat()
	}

	return nil
}
