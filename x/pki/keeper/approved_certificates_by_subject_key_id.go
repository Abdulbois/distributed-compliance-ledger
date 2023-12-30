package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	pkitypes "github.com/zigbee-alliance/distributed-compliance-ledger/types/pki"
	"github.com/zigbee-alliance/distributed-compliance-ledger/x/pki/types"
)

// SetApprovedCertificatesBySubjectKeyId set a specific approvedCertificatesBySubjectKeyId in the store from its index
func (k Keeper) SetApprovedCertificatesBySubjectKeyId(ctx sdk.Context, approvedCertificatesBySubjectKeyId types.ApprovedCertificatesBySubjectKeyId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), pkitypes.KeyPrefix(types.ApprovedCertificatesBySubjectKeyIdKeyPrefix))
	b := k.cdc.MustMarshal(&approvedCertificatesBySubjectKeyId)
	store.Set(types.ApprovedCertificatesBySubjectKeyIdKey(
		approvedCertificatesBySubjectKeyId.SubjectKeyId,
	), b)
}

// Add an approved certificate to the list of approved certificates with the subjectKeyId map.
func (k Keeper) AddApprovedCertificateBySubjectKeyId(ctx sdk.Context, certificate types.Certificate) {
	k.addApprovedCertificates(ctx, certificate.SubjectKeyId, []*types.Certificate{&certificate})
}

// Add an approved certificates list to approved certificates with the subjectKeyId map.
func (k Keeper) AddApprovedCertificatesBySubjectKeyId(ctx sdk.Context, approvedCertificate types.ApprovedCertificates) {
	k.addApprovedCertificates(ctx, approvedCertificate.SubjectKeyId, approvedCertificate.Certs)
}

func (k Keeper) addApprovedCertificates(ctx sdk.Context, subjectKeyId string, certs []*types.Certificate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), pkitypes.KeyPrefix(types.ApprovedCertificatesBySubjectKeyIdKeyPrefix))

	approvedCertificatesBytes := store.Get(types.ApprovedCertificatesBySubjectKey(
		subjectKeyId,
	))
	var approvedCertificates types.ApprovedCertificatesBySubjectKeyId

	if approvedCertificatesBytes == nil {
		approvedCertificates = types.ApprovedCertificatesBySubjectKeyId{
			SubjectKeyId: subjectKeyId,
			Certs:        []*types.Certificate{},
		}
	} else {
		k.cdc.MustUnmarshal(approvedCertificatesBytes, &approvedCertificates)
	}

	approvedCertificates.Certs = append(approvedCertificates.Certs, certs...)

	k.SetApprovedCertificatesBySubjectKeyId(ctx, approvedCertificates)
}

// GetApprovedCertificatesBySubjectKeyId returns a approvedCertificatesBySubjectKeyId from its index
func (k Keeper) GetApprovedCertificatesBySubjectKeyId(
	ctx sdk.Context,
	subjectKeyId string,

) (val types.ApprovedCertificatesBySubjectKeyId, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), pkitypes.KeyPrefix(types.ApprovedCertificatesBySubjectKeyIdKeyPrefix))

	b := store.Get(types.ApprovedCertificatesBySubjectKeyIdKey(
		subjectKeyId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveApprovedCertificatesBySubjectKeyId removes a approvedCertificatesBySubjectKeyId from the store
func (k Keeper) RemoveApprovedCertificatesBySubjectKeyId(
	ctx sdk.Context,
	subjectKeyId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), pkitypes.KeyPrefix(types.ApprovedCertificatesBySubjectKeyIdKeyPrefix))
	store.Delete(types.ApprovedCertificatesBySubjectKeyIdKey(
		subjectKeyId,
	))
}

// GetAllApprovedCertificatesBySubjectKeyId returns all approvedCertificatesBySubjectKeyId
func (k Keeper) GetAllApprovedCertificatesBySubjectKeyId(ctx sdk.Context) (list []types.ApprovedCertificatesBySubjectKeyId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), pkitypes.KeyPrefix(types.ApprovedCertificatesBySubjectKeyIdKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ApprovedCertificatesBySubjectKeyId
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
