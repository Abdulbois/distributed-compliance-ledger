package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/zigbee-alliance/distributed-compliance-ledger/testutil/keeper"
	"github.com/zigbee-alliance/distributed-compliance-ledger/x/model/keeper"
	"github.com/zigbee-alliance/distributed-compliance-ledger/x/model/types"
)

// Prevent strconv unused error.
var _ = strconv.IntSize

func _createModel(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Model {
	items := make([]types.Model, n)
	for i := range items {
		items[i].Vid = int32(i)
		items[i].Pid = int32(i)
		items[i].CommissioningModeSecondaryStepsHint = uint32(i)
		keeper.SetModel(ctx, items[i])
	}

	return items
}

func TestMigrator_Migrate3to4(t *testing.T) {
	_keeper, ctx := keepertest.ModelKeeper(t, nil, nil)
	originalModels := _createModel(_keeper, ctx, 5)

	migrator := keeper.NewMigrator(*_keeper)
	err := migrator.Migrate3to4(ctx)
	require.NoError(t, err)

	// check that all models are migrated
	newModels := _keeper.GetAllModel(ctx)
	require.Len(t, newModels, len(originalModels))
	for i, item := range originalModels {
		require.Equal(t, item.Vid, newModels[i].Vid)
		require.Equal(t, item.Pid, newModels[i].Pid)
		if item.CommissioningModeSecondaryStepsHint == 1 {
			require.Equal(t, uint32(4), newModels[i].CommissioningModeSecondaryStepsHint)
		} else {
			require.Equal(t, item.CommissioningModeSecondaryStepsHint, newModels[i].CommissioningModeSecondaryStepsHint)
		}
	}
}
