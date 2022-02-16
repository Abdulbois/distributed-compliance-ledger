/* eslint-disable */
import { ProposedUpgrade } from '../dclupgrade/proposed_upgrade';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'zigbeealliance.distributedcomplianceledger.dclupgrade';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.proposedUpgradeList) {
            ProposedUpgrade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.proposedUpgradeList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposedUpgradeList.push(ProposedUpgrade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.proposedUpgradeList = [];
        if (object.proposedUpgradeList !== undefined && object.proposedUpgradeList !== null) {
            for (const e of object.proposedUpgradeList) {
                message.proposedUpgradeList.push(ProposedUpgrade.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.proposedUpgradeList) {
            obj.proposedUpgradeList = message.proposedUpgradeList.map((e) => (e ? ProposedUpgrade.toJSON(e) : undefined));
        }
        else {
            obj.proposedUpgradeList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.proposedUpgradeList = [];
        if (object.proposedUpgradeList !== undefined && object.proposedUpgradeList !== null) {
            for (const e of object.proposedUpgradeList) {
                message.proposedUpgradeList.push(ProposedUpgrade.fromPartial(e));
            }
        }
        return message;
    }
};
