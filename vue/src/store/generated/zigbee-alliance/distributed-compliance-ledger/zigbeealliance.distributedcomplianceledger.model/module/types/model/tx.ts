/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'zigbeealliance.distributedcomplianceledger.model'

export interface MsgCreateModel {
  creator: string
  vid: number
  pid: number
  deviceTypeId: number
  productName: string
  productLabel: string
  partNumber: string
  commissioningCustomFlow: number
  commissioningCustomFlowUrl: string
  commissioningModeInitialStepsHint: number
  commissioningModeInitialStepsInstruction: string
  commissioningModeSecondaryStepsHint: number
  commissioningModeSecondaryStepsInstruction: string
  userManualUrl: string
  supportUrl: string
  productUrl: string
}

export interface MsgCreateModelResponse {}

export interface MsgUpdateModel {
  creator: string
  vid: number
  pid: number
  deviceTypeId: number
  productName: string
  productLabel: string
  partNumber: string
  commissioningCustomFlow: number
  commissioningCustomFlowUrl: string
  commissioningModeInitialStepsHint: number
  commissioningModeInitialStepsInstruction: string
  commissioningModeSecondaryStepsHint: number
  commissioningModeSecondaryStepsInstruction: string
  userManualUrl: string
  supportUrl: string
  productUrl: string
}

export interface MsgUpdateModelResponse {}

export interface MsgDeleteModel {
  creator: string
  vid: number
  pid: number
}

export interface MsgDeleteModelResponse {}

export interface MsgCreateModelVersion {
  creator: string
  vid: number
  pid: number
  softwareVersion: number
  softwareVersionString: string
  cdVersionNumber: number
  firmwareDigests: string
  softwareVersionValid: boolean
  otaUrl: string
  otaFileSize: number
  otaChecksum: string
  otaChecksumType: number
  minApplicableSoftwareVersion: number
  maxApplicableSoftwareVersion: number
  releaseNotesUrl: string
}

export interface MsgCreateModelVersionResponse {}

export interface MsgUpdateModelVersion {
  creator: string
  vid: number
  pid: number
  softwareVersion: number
  softwareVersionString: string
  cdVersionNumber: number
  firmwareDigests: string
  softwareVersionValid: boolean
  otaUrl: string
  otaFileSize: number
  otaChecksum: string
  otaChecksumType: number
  minApplicableSoftwareVersion: number
  maxApplicableSoftwareVersion: number
  releaseNotesUrl: string
}

export interface MsgUpdateModelVersionResponse {}

export interface MsgDeleteModelVersion {
  creator: string
  vid: number
  pid: number
  softwareVersion: number
}

export interface MsgDeleteModelVersionResponse {}

export interface MsgCreateModelVersions {
  creator: string
  vid: number
  pid: number
  softwareVersions: number[]
}

export interface MsgCreateModelVersionsResponse {}

export interface MsgUpdateModelVersions {
  creator: string
  vid: number
  pid: number
  softwareVersions: number[]
}

export interface MsgUpdateModelVersionsResponse {}

export interface MsgDeleteModelVersions {
  creator: string
  vid: number
  pid: number
}

export interface MsgDeleteModelVersionsResponse {}

const baseMsgCreateModel: object = {
  creator: '',
  vid: 0,
  pid: 0,
  deviceTypeId: 0,
  productName: '',
  productLabel: '',
  partNumber: '',
  commissioningCustomFlow: 0,
  commissioningCustomFlowUrl: '',
  commissioningModeInitialStepsHint: 0,
  commissioningModeInitialStepsInstruction: '',
  commissioningModeSecondaryStepsHint: 0,
  commissioningModeSecondaryStepsInstruction: '',
  userManualUrl: '',
  supportUrl: '',
  productUrl: ''
}

export const MsgCreateModel = {
  encode(message: MsgCreateModel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    if (message.deviceTypeId !== 0) {
      writer.uint32(32).int32(message.deviceTypeId)
    }
    if (message.productName !== '') {
      writer.uint32(42).string(message.productName)
    }
    if (message.productLabel !== '') {
      writer.uint32(50).string(message.productLabel)
    }
    if (message.partNumber !== '') {
      writer.uint32(58).string(message.partNumber)
    }
    if (message.commissioningCustomFlow !== 0) {
      writer.uint32(64).int32(message.commissioningCustomFlow)
    }
    if (message.commissioningCustomFlowUrl !== '') {
      writer.uint32(74).string(message.commissioningCustomFlowUrl)
    }
    if (message.commissioningModeInitialStepsHint !== 0) {
      writer.uint32(80).uint64(message.commissioningModeInitialStepsHint)
    }
    if (message.commissioningModeInitialStepsInstruction !== '') {
      writer.uint32(90).string(message.commissioningModeInitialStepsInstruction)
    }
    if (message.commissioningModeSecondaryStepsHint !== 0) {
      writer.uint32(96).uint64(message.commissioningModeSecondaryStepsHint)
    }
    if (message.commissioningModeSecondaryStepsInstruction !== '') {
      writer.uint32(106).string(message.commissioningModeSecondaryStepsInstruction)
    }
    if (message.userManualUrl !== '') {
      writer.uint32(114).string(message.userManualUrl)
    }
    if (message.supportUrl !== '') {
      writer.uint32(122).string(message.supportUrl)
    }
    if (message.productUrl !== '') {
      writer.uint32(130).string(message.productUrl)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateModel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateModel } as MsgCreateModel
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        case 4:
          message.deviceTypeId = reader.int32()
          break
        case 5:
          message.productName = reader.string()
          break
        case 6:
          message.productLabel = reader.string()
          break
        case 7:
          message.partNumber = reader.string()
          break
        case 8:
          message.commissioningCustomFlow = reader.int32()
          break
        case 9:
          message.commissioningCustomFlowUrl = reader.string()
          break
        case 10:
          message.commissioningModeInitialStepsHint = longToNumber(reader.uint64() as Long)
          break
        case 11:
          message.commissioningModeInitialStepsInstruction = reader.string()
          break
        case 12:
          message.commissioningModeSecondaryStepsHint = longToNumber(reader.uint64() as Long)
          break
        case 13:
          message.commissioningModeSecondaryStepsInstruction = reader.string()
          break
        case 14:
          message.userManualUrl = reader.string()
          break
        case 15:
          message.supportUrl = reader.string()
          break
        case 16:
          message.productUrl = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateModel {
    const message = { ...baseMsgCreateModel } as MsgCreateModel
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    if (object.deviceTypeId !== undefined && object.deviceTypeId !== null) {
      message.deviceTypeId = Number(object.deviceTypeId)
    } else {
      message.deviceTypeId = 0
    }
    if (object.productName !== undefined && object.productName !== null) {
      message.productName = String(object.productName)
    } else {
      message.productName = ''
    }
    if (object.productLabel !== undefined && object.productLabel !== null) {
      message.productLabel = String(object.productLabel)
    } else {
      message.productLabel = ''
    }
    if (object.partNumber !== undefined && object.partNumber !== null) {
      message.partNumber = String(object.partNumber)
    } else {
      message.partNumber = ''
    }
    if (object.commissioningCustomFlow !== undefined && object.commissioningCustomFlow !== null) {
      message.commissioningCustomFlow = Number(object.commissioningCustomFlow)
    } else {
      message.commissioningCustomFlow = 0
    }
    if (object.commissioningCustomFlowUrl !== undefined && object.commissioningCustomFlowUrl !== null) {
      message.commissioningCustomFlowUrl = String(object.commissioningCustomFlowUrl)
    } else {
      message.commissioningCustomFlowUrl = ''
    }
    if (object.commissioningModeInitialStepsHint !== undefined && object.commissioningModeInitialStepsHint !== null) {
      message.commissioningModeInitialStepsHint = Number(object.commissioningModeInitialStepsHint)
    } else {
      message.commissioningModeInitialStepsHint = 0
    }
    if (object.commissioningModeInitialStepsInstruction !== undefined && object.commissioningModeInitialStepsInstruction !== null) {
      message.commissioningModeInitialStepsInstruction = String(object.commissioningModeInitialStepsInstruction)
    } else {
      message.commissioningModeInitialStepsInstruction = ''
    }
    if (object.commissioningModeSecondaryStepsHint !== undefined && object.commissioningModeSecondaryStepsHint !== null) {
      message.commissioningModeSecondaryStepsHint = Number(object.commissioningModeSecondaryStepsHint)
    } else {
      message.commissioningModeSecondaryStepsHint = 0
    }
    if (object.commissioningModeSecondaryStepsInstruction !== undefined && object.commissioningModeSecondaryStepsInstruction !== null) {
      message.commissioningModeSecondaryStepsInstruction = String(object.commissioningModeSecondaryStepsInstruction)
    } else {
      message.commissioningModeSecondaryStepsInstruction = ''
    }
    if (object.userManualUrl !== undefined && object.userManualUrl !== null) {
      message.userManualUrl = String(object.userManualUrl)
    } else {
      message.userManualUrl = ''
    }
    if (object.supportUrl !== undefined && object.supportUrl !== null) {
      message.supportUrl = String(object.supportUrl)
    } else {
      message.supportUrl = ''
    }
    if (object.productUrl !== undefined && object.productUrl !== null) {
      message.productUrl = String(object.productUrl)
    } else {
      message.productUrl = ''
    }
    return message
  },

  toJSON(message: MsgCreateModel): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    message.deviceTypeId !== undefined && (obj.deviceTypeId = message.deviceTypeId)
    message.productName !== undefined && (obj.productName = message.productName)
    message.productLabel !== undefined && (obj.productLabel = message.productLabel)
    message.partNumber !== undefined && (obj.partNumber = message.partNumber)
    message.commissioningCustomFlow !== undefined && (obj.commissioningCustomFlow = message.commissioningCustomFlow)
    message.commissioningCustomFlowUrl !== undefined && (obj.commissioningCustomFlowUrl = message.commissioningCustomFlowUrl)
    message.commissioningModeInitialStepsHint !== undefined && (obj.commissioningModeInitialStepsHint = message.commissioningModeInitialStepsHint)
    message.commissioningModeInitialStepsInstruction !== undefined &&
      (obj.commissioningModeInitialStepsInstruction = message.commissioningModeInitialStepsInstruction)
    message.commissioningModeSecondaryStepsHint !== undefined && (obj.commissioningModeSecondaryStepsHint = message.commissioningModeSecondaryStepsHint)
    message.commissioningModeSecondaryStepsInstruction !== undefined &&
      (obj.commissioningModeSecondaryStepsInstruction = message.commissioningModeSecondaryStepsInstruction)
    message.userManualUrl !== undefined && (obj.userManualUrl = message.userManualUrl)
    message.supportUrl !== undefined && (obj.supportUrl = message.supportUrl)
    message.productUrl !== undefined && (obj.productUrl = message.productUrl)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateModel>): MsgCreateModel {
    const message = { ...baseMsgCreateModel } as MsgCreateModel
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    if (object.deviceTypeId !== undefined && object.deviceTypeId !== null) {
      message.deviceTypeId = object.deviceTypeId
    } else {
      message.deviceTypeId = 0
    }
    if (object.productName !== undefined && object.productName !== null) {
      message.productName = object.productName
    } else {
      message.productName = ''
    }
    if (object.productLabel !== undefined && object.productLabel !== null) {
      message.productLabel = object.productLabel
    } else {
      message.productLabel = ''
    }
    if (object.partNumber !== undefined && object.partNumber !== null) {
      message.partNumber = object.partNumber
    } else {
      message.partNumber = ''
    }
    if (object.commissioningCustomFlow !== undefined && object.commissioningCustomFlow !== null) {
      message.commissioningCustomFlow = object.commissioningCustomFlow
    } else {
      message.commissioningCustomFlow = 0
    }
    if (object.commissioningCustomFlowUrl !== undefined && object.commissioningCustomFlowUrl !== null) {
      message.commissioningCustomFlowUrl = object.commissioningCustomFlowUrl
    } else {
      message.commissioningCustomFlowUrl = ''
    }
    if (object.commissioningModeInitialStepsHint !== undefined && object.commissioningModeInitialStepsHint !== null) {
      message.commissioningModeInitialStepsHint = object.commissioningModeInitialStepsHint
    } else {
      message.commissioningModeInitialStepsHint = 0
    }
    if (object.commissioningModeInitialStepsInstruction !== undefined && object.commissioningModeInitialStepsInstruction !== null) {
      message.commissioningModeInitialStepsInstruction = object.commissioningModeInitialStepsInstruction
    } else {
      message.commissioningModeInitialStepsInstruction = ''
    }
    if (object.commissioningModeSecondaryStepsHint !== undefined && object.commissioningModeSecondaryStepsHint !== null) {
      message.commissioningModeSecondaryStepsHint = object.commissioningModeSecondaryStepsHint
    } else {
      message.commissioningModeSecondaryStepsHint = 0
    }
    if (object.commissioningModeSecondaryStepsInstruction !== undefined && object.commissioningModeSecondaryStepsInstruction !== null) {
      message.commissioningModeSecondaryStepsInstruction = object.commissioningModeSecondaryStepsInstruction
    } else {
      message.commissioningModeSecondaryStepsInstruction = ''
    }
    if (object.userManualUrl !== undefined && object.userManualUrl !== null) {
      message.userManualUrl = object.userManualUrl
    } else {
      message.userManualUrl = ''
    }
    if (object.supportUrl !== undefined && object.supportUrl !== null) {
      message.supportUrl = object.supportUrl
    } else {
      message.supportUrl = ''
    }
    if (object.productUrl !== undefined && object.productUrl !== null) {
      message.productUrl = object.productUrl
    } else {
      message.productUrl = ''
    }
    return message
  }
}

const baseMsgCreateModelResponse: object = {}

export const MsgCreateModelResponse = {
  encode(_: MsgCreateModelResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateModelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateModelResponse } as MsgCreateModelResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateModelResponse {
    const message = { ...baseMsgCreateModelResponse } as MsgCreateModelResponse
    return message
  },

  toJSON(_: MsgCreateModelResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateModelResponse>): MsgCreateModelResponse {
    const message = { ...baseMsgCreateModelResponse } as MsgCreateModelResponse
    return message
  }
}

const baseMsgUpdateModel: object = {
  creator: '',
  vid: 0,
  pid: 0,
  deviceTypeId: 0,
  productName: '',
  productLabel: '',
  partNumber: '',
  commissioningCustomFlow: 0,
  commissioningCustomFlowUrl: '',
  commissioningModeInitialStepsHint: 0,
  commissioningModeInitialStepsInstruction: '',
  commissioningModeSecondaryStepsHint: 0,
  commissioningModeSecondaryStepsInstruction: '',
  userManualUrl: '',
  supportUrl: '',
  productUrl: ''
}

export const MsgUpdateModel = {
  encode(message: MsgUpdateModel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    if (message.deviceTypeId !== 0) {
      writer.uint32(32).int32(message.deviceTypeId)
    }
    if (message.productName !== '') {
      writer.uint32(42).string(message.productName)
    }
    if (message.productLabel !== '') {
      writer.uint32(50).string(message.productLabel)
    }
    if (message.partNumber !== '') {
      writer.uint32(58).string(message.partNumber)
    }
    if (message.commissioningCustomFlow !== 0) {
      writer.uint32(64).int32(message.commissioningCustomFlow)
    }
    if (message.commissioningCustomFlowUrl !== '') {
      writer.uint32(74).string(message.commissioningCustomFlowUrl)
    }
    if (message.commissioningModeInitialStepsHint !== 0) {
      writer.uint32(80).uint64(message.commissioningModeInitialStepsHint)
    }
    if (message.commissioningModeInitialStepsInstruction !== '') {
      writer.uint32(90).string(message.commissioningModeInitialStepsInstruction)
    }
    if (message.commissioningModeSecondaryStepsHint !== 0) {
      writer.uint32(96).uint64(message.commissioningModeSecondaryStepsHint)
    }
    if (message.commissioningModeSecondaryStepsInstruction !== '') {
      writer.uint32(106).string(message.commissioningModeSecondaryStepsInstruction)
    }
    if (message.userManualUrl !== '') {
      writer.uint32(114).string(message.userManualUrl)
    }
    if (message.supportUrl !== '') {
      writer.uint32(122).string(message.supportUrl)
    }
    if (message.productUrl !== '') {
      writer.uint32(130).string(message.productUrl)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateModel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateModel } as MsgUpdateModel
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        case 4:
          message.deviceTypeId = reader.int32()
          break
        case 5:
          message.productName = reader.string()
          break
        case 6:
          message.productLabel = reader.string()
          break
        case 7:
          message.partNumber = reader.string()
          break
        case 8:
          message.commissioningCustomFlow = reader.int32()
          break
        case 9:
          message.commissioningCustomFlowUrl = reader.string()
          break
        case 10:
          message.commissioningModeInitialStepsHint = longToNumber(reader.uint64() as Long)
          break
        case 11:
          message.commissioningModeInitialStepsInstruction = reader.string()
          break
        case 12:
          message.commissioningModeSecondaryStepsHint = longToNumber(reader.uint64() as Long)
          break
        case 13:
          message.commissioningModeSecondaryStepsInstruction = reader.string()
          break
        case 14:
          message.userManualUrl = reader.string()
          break
        case 15:
          message.supportUrl = reader.string()
          break
        case 16:
          message.productUrl = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateModel {
    const message = { ...baseMsgUpdateModel } as MsgUpdateModel
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    if (object.deviceTypeId !== undefined && object.deviceTypeId !== null) {
      message.deviceTypeId = Number(object.deviceTypeId)
    } else {
      message.deviceTypeId = 0
    }
    if (object.productName !== undefined && object.productName !== null) {
      message.productName = String(object.productName)
    } else {
      message.productName = ''
    }
    if (object.productLabel !== undefined && object.productLabel !== null) {
      message.productLabel = String(object.productLabel)
    } else {
      message.productLabel = ''
    }
    if (object.partNumber !== undefined && object.partNumber !== null) {
      message.partNumber = String(object.partNumber)
    } else {
      message.partNumber = ''
    }
    if (object.commissioningCustomFlow !== undefined && object.commissioningCustomFlow !== null) {
      message.commissioningCustomFlow = Number(object.commissioningCustomFlow)
    } else {
      message.commissioningCustomFlow = 0
    }
    if (object.commissioningCustomFlowUrl !== undefined && object.commissioningCustomFlowUrl !== null) {
      message.commissioningCustomFlowUrl = String(object.commissioningCustomFlowUrl)
    } else {
      message.commissioningCustomFlowUrl = ''
    }
    if (object.commissioningModeInitialStepsHint !== undefined && object.commissioningModeInitialStepsHint !== null) {
      message.commissioningModeInitialStepsHint = Number(object.commissioningModeInitialStepsHint)
    } else {
      message.commissioningModeInitialStepsHint = 0
    }
    if (object.commissioningModeInitialStepsInstruction !== undefined && object.commissioningModeInitialStepsInstruction !== null) {
      message.commissioningModeInitialStepsInstruction = String(object.commissioningModeInitialStepsInstruction)
    } else {
      message.commissioningModeInitialStepsInstruction = ''
    }
    if (object.commissioningModeSecondaryStepsHint !== undefined && object.commissioningModeSecondaryStepsHint !== null) {
      message.commissioningModeSecondaryStepsHint = Number(object.commissioningModeSecondaryStepsHint)
    } else {
      message.commissioningModeSecondaryStepsHint = 0
    }
    if (object.commissioningModeSecondaryStepsInstruction !== undefined && object.commissioningModeSecondaryStepsInstruction !== null) {
      message.commissioningModeSecondaryStepsInstruction = String(object.commissioningModeSecondaryStepsInstruction)
    } else {
      message.commissioningModeSecondaryStepsInstruction = ''
    }
    if (object.userManualUrl !== undefined && object.userManualUrl !== null) {
      message.userManualUrl = String(object.userManualUrl)
    } else {
      message.userManualUrl = ''
    }
    if (object.supportUrl !== undefined && object.supportUrl !== null) {
      message.supportUrl = String(object.supportUrl)
    } else {
      message.supportUrl = ''
    }
    if (object.productUrl !== undefined && object.productUrl !== null) {
      message.productUrl = String(object.productUrl)
    } else {
      message.productUrl = ''
    }
    return message
  },

  toJSON(message: MsgUpdateModel): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    message.deviceTypeId !== undefined && (obj.deviceTypeId = message.deviceTypeId)
    message.productName !== undefined && (obj.productName = message.productName)
    message.productLabel !== undefined && (obj.productLabel = message.productLabel)
    message.partNumber !== undefined && (obj.partNumber = message.partNumber)
    message.commissioningCustomFlow !== undefined && (obj.commissioningCustomFlow = message.commissioningCustomFlow)
    message.commissioningCustomFlowUrl !== undefined && (obj.commissioningCustomFlowUrl = message.commissioningCustomFlowUrl)
    message.commissioningModeInitialStepsHint !== undefined && (obj.commissioningModeInitialStepsHint = message.commissioningModeInitialStepsHint)
    message.commissioningModeInitialStepsInstruction !== undefined &&
      (obj.commissioningModeInitialStepsInstruction = message.commissioningModeInitialStepsInstruction)
    message.commissioningModeSecondaryStepsHint !== undefined && (obj.commissioningModeSecondaryStepsHint = message.commissioningModeSecondaryStepsHint)
    message.commissioningModeSecondaryStepsInstruction !== undefined &&
      (obj.commissioningModeSecondaryStepsInstruction = message.commissioningModeSecondaryStepsInstruction)
    message.userManualUrl !== undefined && (obj.userManualUrl = message.userManualUrl)
    message.supportUrl !== undefined && (obj.supportUrl = message.supportUrl)
    message.productUrl !== undefined && (obj.productUrl = message.productUrl)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateModel>): MsgUpdateModel {
    const message = { ...baseMsgUpdateModel } as MsgUpdateModel
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    if (object.deviceTypeId !== undefined && object.deviceTypeId !== null) {
      message.deviceTypeId = object.deviceTypeId
    } else {
      message.deviceTypeId = 0
    }
    if (object.productName !== undefined && object.productName !== null) {
      message.productName = object.productName
    } else {
      message.productName = ''
    }
    if (object.productLabel !== undefined && object.productLabel !== null) {
      message.productLabel = object.productLabel
    } else {
      message.productLabel = ''
    }
    if (object.partNumber !== undefined && object.partNumber !== null) {
      message.partNumber = object.partNumber
    } else {
      message.partNumber = ''
    }
    if (object.commissioningCustomFlow !== undefined && object.commissioningCustomFlow !== null) {
      message.commissioningCustomFlow = object.commissioningCustomFlow
    } else {
      message.commissioningCustomFlow = 0
    }
    if (object.commissioningCustomFlowUrl !== undefined && object.commissioningCustomFlowUrl !== null) {
      message.commissioningCustomFlowUrl = object.commissioningCustomFlowUrl
    } else {
      message.commissioningCustomFlowUrl = ''
    }
    if (object.commissioningModeInitialStepsHint !== undefined && object.commissioningModeInitialStepsHint !== null) {
      message.commissioningModeInitialStepsHint = object.commissioningModeInitialStepsHint
    } else {
      message.commissioningModeInitialStepsHint = 0
    }
    if (object.commissioningModeInitialStepsInstruction !== undefined && object.commissioningModeInitialStepsInstruction !== null) {
      message.commissioningModeInitialStepsInstruction = object.commissioningModeInitialStepsInstruction
    } else {
      message.commissioningModeInitialStepsInstruction = ''
    }
    if (object.commissioningModeSecondaryStepsHint !== undefined && object.commissioningModeSecondaryStepsHint !== null) {
      message.commissioningModeSecondaryStepsHint = object.commissioningModeSecondaryStepsHint
    } else {
      message.commissioningModeSecondaryStepsHint = 0
    }
    if (object.commissioningModeSecondaryStepsInstruction !== undefined && object.commissioningModeSecondaryStepsInstruction !== null) {
      message.commissioningModeSecondaryStepsInstruction = object.commissioningModeSecondaryStepsInstruction
    } else {
      message.commissioningModeSecondaryStepsInstruction = ''
    }
    if (object.userManualUrl !== undefined && object.userManualUrl !== null) {
      message.userManualUrl = object.userManualUrl
    } else {
      message.userManualUrl = ''
    }
    if (object.supportUrl !== undefined && object.supportUrl !== null) {
      message.supportUrl = object.supportUrl
    } else {
      message.supportUrl = ''
    }
    if (object.productUrl !== undefined && object.productUrl !== null) {
      message.productUrl = object.productUrl
    } else {
      message.productUrl = ''
    }
    return message
  }
}

const baseMsgUpdateModelResponse: object = {}

export const MsgUpdateModelResponse = {
  encode(_: MsgUpdateModelResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateModelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateModelResponse } as MsgUpdateModelResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateModelResponse {
    const message = { ...baseMsgUpdateModelResponse } as MsgUpdateModelResponse
    return message
  },

  toJSON(_: MsgUpdateModelResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateModelResponse>): MsgUpdateModelResponse {
    const message = { ...baseMsgUpdateModelResponse } as MsgUpdateModelResponse
    return message
  }
}

const baseMsgDeleteModel: object = { creator: '', vid: 0, pid: 0 }

export const MsgDeleteModel = {
  encode(message: MsgDeleteModel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteModel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteModel } as MsgDeleteModel
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteModel {
    const message = { ...baseMsgDeleteModel } as MsgDeleteModel
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    return message
  },

  toJSON(message: MsgDeleteModel): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteModel>): MsgDeleteModel {
    const message = { ...baseMsgDeleteModel } as MsgDeleteModel
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    return message
  }
}

const baseMsgDeleteModelResponse: object = {}

export const MsgDeleteModelResponse = {
  encode(_: MsgDeleteModelResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteModelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteModelResponse } as MsgDeleteModelResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteModelResponse {
    const message = { ...baseMsgDeleteModelResponse } as MsgDeleteModelResponse
    return message
  },

  toJSON(_: MsgDeleteModelResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteModelResponse>): MsgDeleteModelResponse {
    const message = { ...baseMsgDeleteModelResponse } as MsgDeleteModelResponse
    return message
  }
}

const baseMsgCreateModelVersion: object = {
  creator: '',
  vid: 0,
  pid: 0,
  softwareVersion: 0,
  softwareVersionString: '',
  cdVersionNumber: 0,
  firmwareDigests: '',
  softwareVersionValid: false,
  otaUrl: '',
  otaFileSize: 0,
  otaChecksum: '',
  otaChecksumType: 0,
  minApplicableSoftwareVersion: 0,
  maxApplicableSoftwareVersion: 0,
  releaseNotesUrl: ''
}

export const MsgCreateModelVersion = {
  encode(message: MsgCreateModelVersion, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    if (message.softwareVersion !== 0) {
      writer.uint32(32).uint64(message.softwareVersion)
    }
    if (message.softwareVersionString !== '') {
      writer.uint32(42).string(message.softwareVersionString)
    }
    if (message.cdVersionNumber !== 0) {
      writer.uint32(48).int32(message.cdVersionNumber)
    }
    if (message.firmwareDigests !== '') {
      writer.uint32(58).string(message.firmwareDigests)
    }
    if (message.softwareVersionValid === true) {
      writer.uint32(64).bool(message.softwareVersionValid)
    }
    if (message.otaUrl !== '') {
      writer.uint32(74).string(message.otaUrl)
    }
    if (message.otaFileSize !== 0) {
      writer.uint32(80).uint64(message.otaFileSize)
    }
    if (message.otaChecksum !== '') {
      writer.uint32(90).string(message.otaChecksum)
    }
    if (message.otaChecksumType !== 0) {
      writer.uint32(96).int32(message.otaChecksumType)
    }
    if (message.minApplicableSoftwareVersion !== 0) {
      writer.uint32(104).uint64(message.minApplicableSoftwareVersion)
    }
    if (message.maxApplicableSoftwareVersion !== 0) {
      writer.uint32(112).uint64(message.maxApplicableSoftwareVersion)
    }
    if (message.releaseNotesUrl !== '') {
      writer.uint32(122).string(message.releaseNotesUrl)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateModelVersion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateModelVersion } as MsgCreateModelVersion
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        case 4:
          message.softwareVersion = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.softwareVersionString = reader.string()
          break
        case 6:
          message.cdVersionNumber = reader.int32()
          break
        case 7:
          message.firmwareDigests = reader.string()
          break
        case 8:
          message.softwareVersionValid = reader.bool()
          break
        case 9:
          message.otaUrl = reader.string()
          break
        case 10:
          message.otaFileSize = longToNumber(reader.uint64() as Long)
          break
        case 11:
          message.otaChecksum = reader.string()
          break
        case 12:
          message.otaChecksumType = reader.int32()
          break
        case 13:
          message.minApplicableSoftwareVersion = longToNumber(reader.uint64() as Long)
          break
        case 14:
          message.maxApplicableSoftwareVersion = longToNumber(reader.uint64() as Long)
          break
        case 15:
          message.releaseNotesUrl = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateModelVersion {
    const message = { ...baseMsgCreateModelVersion } as MsgCreateModelVersion
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    if (object.softwareVersion !== undefined && object.softwareVersion !== null) {
      message.softwareVersion = Number(object.softwareVersion)
    } else {
      message.softwareVersion = 0
    }
    if (object.softwareVersionString !== undefined && object.softwareVersionString !== null) {
      message.softwareVersionString = String(object.softwareVersionString)
    } else {
      message.softwareVersionString = ''
    }
    if (object.cdVersionNumber !== undefined && object.cdVersionNumber !== null) {
      message.cdVersionNumber = Number(object.cdVersionNumber)
    } else {
      message.cdVersionNumber = 0
    }
    if (object.firmwareDigests !== undefined && object.firmwareDigests !== null) {
      message.firmwareDigests = String(object.firmwareDigests)
    } else {
      message.firmwareDigests = ''
    }
    if (object.softwareVersionValid !== undefined && object.softwareVersionValid !== null) {
      message.softwareVersionValid = Boolean(object.softwareVersionValid)
    } else {
      message.softwareVersionValid = false
    }
    if (object.otaUrl !== undefined && object.otaUrl !== null) {
      message.otaUrl = String(object.otaUrl)
    } else {
      message.otaUrl = ''
    }
    if (object.otaFileSize !== undefined && object.otaFileSize !== null) {
      message.otaFileSize = Number(object.otaFileSize)
    } else {
      message.otaFileSize = 0
    }
    if (object.otaChecksum !== undefined && object.otaChecksum !== null) {
      message.otaChecksum = String(object.otaChecksum)
    } else {
      message.otaChecksum = ''
    }
    if (object.otaChecksumType !== undefined && object.otaChecksumType !== null) {
      message.otaChecksumType = Number(object.otaChecksumType)
    } else {
      message.otaChecksumType = 0
    }
    if (object.minApplicableSoftwareVersion !== undefined && object.minApplicableSoftwareVersion !== null) {
      message.minApplicableSoftwareVersion = Number(object.minApplicableSoftwareVersion)
    } else {
      message.minApplicableSoftwareVersion = 0
    }
    if (object.maxApplicableSoftwareVersion !== undefined && object.maxApplicableSoftwareVersion !== null) {
      message.maxApplicableSoftwareVersion = Number(object.maxApplicableSoftwareVersion)
    } else {
      message.maxApplicableSoftwareVersion = 0
    }
    if (object.releaseNotesUrl !== undefined && object.releaseNotesUrl !== null) {
      message.releaseNotesUrl = String(object.releaseNotesUrl)
    } else {
      message.releaseNotesUrl = ''
    }
    return message
  },

  toJSON(message: MsgCreateModelVersion): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    message.softwareVersion !== undefined && (obj.softwareVersion = message.softwareVersion)
    message.softwareVersionString !== undefined && (obj.softwareVersionString = message.softwareVersionString)
    message.cdVersionNumber !== undefined && (obj.cdVersionNumber = message.cdVersionNumber)
    message.firmwareDigests !== undefined && (obj.firmwareDigests = message.firmwareDigests)
    message.softwareVersionValid !== undefined && (obj.softwareVersionValid = message.softwareVersionValid)
    message.otaUrl !== undefined && (obj.otaUrl = message.otaUrl)
    message.otaFileSize !== undefined && (obj.otaFileSize = message.otaFileSize)
    message.otaChecksum !== undefined && (obj.otaChecksum = message.otaChecksum)
    message.otaChecksumType !== undefined && (obj.otaChecksumType = message.otaChecksumType)
    message.minApplicableSoftwareVersion !== undefined && (obj.minApplicableSoftwareVersion = message.minApplicableSoftwareVersion)
    message.maxApplicableSoftwareVersion !== undefined && (obj.maxApplicableSoftwareVersion = message.maxApplicableSoftwareVersion)
    message.releaseNotesUrl !== undefined && (obj.releaseNotesUrl = message.releaseNotesUrl)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateModelVersion>): MsgCreateModelVersion {
    const message = { ...baseMsgCreateModelVersion } as MsgCreateModelVersion
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    if (object.softwareVersion !== undefined && object.softwareVersion !== null) {
      message.softwareVersion = object.softwareVersion
    } else {
      message.softwareVersion = 0
    }
    if (object.softwareVersionString !== undefined && object.softwareVersionString !== null) {
      message.softwareVersionString = object.softwareVersionString
    } else {
      message.softwareVersionString = ''
    }
    if (object.cdVersionNumber !== undefined && object.cdVersionNumber !== null) {
      message.cdVersionNumber = object.cdVersionNumber
    } else {
      message.cdVersionNumber = 0
    }
    if (object.firmwareDigests !== undefined && object.firmwareDigests !== null) {
      message.firmwareDigests = object.firmwareDigests
    } else {
      message.firmwareDigests = ''
    }
    if (object.softwareVersionValid !== undefined && object.softwareVersionValid !== null) {
      message.softwareVersionValid = object.softwareVersionValid
    } else {
      message.softwareVersionValid = false
    }
    if (object.otaUrl !== undefined && object.otaUrl !== null) {
      message.otaUrl = object.otaUrl
    } else {
      message.otaUrl = ''
    }
    if (object.otaFileSize !== undefined && object.otaFileSize !== null) {
      message.otaFileSize = object.otaFileSize
    } else {
      message.otaFileSize = 0
    }
    if (object.otaChecksum !== undefined && object.otaChecksum !== null) {
      message.otaChecksum = object.otaChecksum
    } else {
      message.otaChecksum = ''
    }
    if (object.otaChecksumType !== undefined && object.otaChecksumType !== null) {
      message.otaChecksumType = object.otaChecksumType
    } else {
      message.otaChecksumType = 0
    }
    if (object.minApplicableSoftwareVersion !== undefined && object.minApplicableSoftwareVersion !== null) {
      message.minApplicableSoftwareVersion = object.minApplicableSoftwareVersion
    } else {
      message.minApplicableSoftwareVersion = 0
    }
    if (object.maxApplicableSoftwareVersion !== undefined && object.maxApplicableSoftwareVersion !== null) {
      message.maxApplicableSoftwareVersion = object.maxApplicableSoftwareVersion
    } else {
      message.maxApplicableSoftwareVersion = 0
    }
    if (object.releaseNotesUrl !== undefined && object.releaseNotesUrl !== null) {
      message.releaseNotesUrl = object.releaseNotesUrl
    } else {
      message.releaseNotesUrl = ''
    }
    return message
  }
}

const baseMsgCreateModelVersionResponse: object = {}

export const MsgCreateModelVersionResponse = {
  encode(_: MsgCreateModelVersionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateModelVersionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateModelVersionResponse } as MsgCreateModelVersionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateModelVersionResponse {
    const message = { ...baseMsgCreateModelVersionResponse } as MsgCreateModelVersionResponse
    return message
  },

  toJSON(_: MsgCreateModelVersionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateModelVersionResponse>): MsgCreateModelVersionResponse {
    const message = { ...baseMsgCreateModelVersionResponse } as MsgCreateModelVersionResponse
    return message
  }
}

const baseMsgUpdateModelVersion: object = {
  creator: '',
  vid: 0,
  pid: 0,
  softwareVersion: 0,
  softwareVersionString: '',
  cdVersionNumber: 0,
  firmwareDigests: '',
  softwareVersionValid: false,
  otaUrl: '',
  otaFileSize: 0,
  otaChecksum: '',
  otaChecksumType: 0,
  minApplicableSoftwareVersion: 0,
  maxApplicableSoftwareVersion: 0,
  releaseNotesUrl: ''
}

export const MsgUpdateModelVersion = {
  encode(message: MsgUpdateModelVersion, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    if (message.softwareVersion !== 0) {
      writer.uint32(32).uint64(message.softwareVersion)
    }
    if (message.softwareVersionString !== '') {
      writer.uint32(42).string(message.softwareVersionString)
    }
    if (message.cdVersionNumber !== 0) {
      writer.uint32(48).int32(message.cdVersionNumber)
    }
    if (message.firmwareDigests !== '') {
      writer.uint32(58).string(message.firmwareDigests)
    }
    if (message.softwareVersionValid === true) {
      writer.uint32(64).bool(message.softwareVersionValid)
    }
    if (message.otaUrl !== '') {
      writer.uint32(74).string(message.otaUrl)
    }
    if (message.otaFileSize !== 0) {
      writer.uint32(80).uint64(message.otaFileSize)
    }
    if (message.otaChecksum !== '') {
      writer.uint32(90).string(message.otaChecksum)
    }
    if (message.otaChecksumType !== 0) {
      writer.uint32(96).int32(message.otaChecksumType)
    }
    if (message.minApplicableSoftwareVersion !== 0) {
      writer.uint32(104).uint64(message.minApplicableSoftwareVersion)
    }
    if (message.maxApplicableSoftwareVersion !== 0) {
      writer.uint32(112).uint64(message.maxApplicableSoftwareVersion)
    }
    if (message.releaseNotesUrl !== '') {
      writer.uint32(122).string(message.releaseNotesUrl)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateModelVersion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateModelVersion } as MsgUpdateModelVersion
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        case 4:
          message.softwareVersion = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.softwareVersionString = reader.string()
          break
        case 6:
          message.cdVersionNumber = reader.int32()
          break
        case 7:
          message.firmwareDigests = reader.string()
          break
        case 8:
          message.softwareVersionValid = reader.bool()
          break
        case 9:
          message.otaUrl = reader.string()
          break
        case 10:
          message.otaFileSize = longToNumber(reader.uint64() as Long)
          break
        case 11:
          message.otaChecksum = reader.string()
          break
        case 12:
          message.otaChecksumType = reader.int32()
          break
        case 13:
          message.minApplicableSoftwareVersion = longToNumber(reader.uint64() as Long)
          break
        case 14:
          message.maxApplicableSoftwareVersion = longToNumber(reader.uint64() as Long)
          break
        case 15:
          message.releaseNotesUrl = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateModelVersion {
    const message = { ...baseMsgUpdateModelVersion } as MsgUpdateModelVersion
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    if (object.softwareVersion !== undefined && object.softwareVersion !== null) {
      message.softwareVersion = Number(object.softwareVersion)
    } else {
      message.softwareVersion = 0
    }
    if (object.softwareVersionString !== undefined && object.softwareVersionString !== null) {
      message.softwareVersionString = String(object.softwareVersionString)
    } else {
      message.softwareVersionString = ''
    }
    if (object.cdVersionNumber !== undefined && object.cdVersionNumber !== null) {
      message.cdVersionNumber = Number(object.cdVersionNumber)
    } else {
      message.cdVersionNumber = 0
    }
    if (object.firmwareDigests !== undefined && object.firmwareDigests !== null) {
      message.firmwareDigests = String(object.firmwareDigests)
    } else {
      message.firmwareDigests = ''
    }
    if (object.softwareVersionValid !== undefined && object.softwareVersionValid !== null) {
      message.softwareVersionValid = Boolean(object.softwareVersionValid)
    } else {
      message.softwareVersionValid = false
    }
    if (object.otaUrl !== undefined && object.otaUrl !== null) {
      message.otaUrl = String(object.otaUrl)
    } else {
      message.otaUrl = ''
    }
    if (object.otaFileSize !== undefined && object.otaFileSize !== null) {
      message.otaFileSize = Number(object.otaFileSize)
    } else {
      message.otaFileSize = 0
    }
    if (object.otaChecksum !== undefined && object.otaChecksum !== null) {
      message.otaChecksum = String(object.otaChecksum)
    } else {
      message.otaChecksum = ''
    }
    if (object.otaChecksumType !== undefined && object.otaChecksumType !== null) {
      message.otaChecksumType = Number(object.otaChecksumType)
    } else {
      message.otaChecksumType = 0
    }
    if (object.minApplicableSoftwareVersion !== undefined && object.minApplicableSoftwareVersion !== null) {
      message.minApplicableSoftwareVersion = Number(object.minApplicableSoftwareVersion)
    } else {
      message.minApplicableSoftwareVersion = 0
    }
    if (object.maxApplicableSoftwareVersion !== undefined && object.maxApplicableSoftwareVersion !== null) {
      message.maxApplicableSoftwareVersion = Number(object.maxApplicableSoftwareVersion)
    } else {
      message.maxApplicableSoftwareVersion = 0
    }
    if (object.releaseNotesUrl !== undefined && object.releaseNotesUrl !== null) {
      message.releaseNotesUrl = String(object.releaseNotesUrl)
    } else {
      message.releaseNotesUrl = ''
    }
    return message
  },

  toJSON(message: MsgUpdateModelVersion): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    message.softwareVersion !== undefined && (obj.softwareVersion = message.softwareVersion)
    message.softwareVersionString !== undefined && (obj.softwareVersionString = message.softwareVersionString)
    message.cdVersionNumber !== undefined && (obj.cdVersionNumber = message.cdVersionNumber)
    message.firmwareDigests !== undefined && (obj.firmwareDigests = message.firmwareDigests)
    message.softwareVersionValid !== undefined && (obj.softwareVersionValid = message.softwareVersionValid)
    message.otaUrl !== undefined && (obj.otaUrl = message.otaUrl)
    message.otaFileSize !== undefined && (obj.otaFileSize = message.otaFileSize)
    message.otaChecksum !== undefined && (obj.otaChecksum = message.otaChecksum)
    message.otaChecksumType !== undefined && (obj.otaChecksumType = message.otaChecksumType)
    message.minApplicableSoftwareVersion !== undefined && (obj.minApplicableSoftwareVersion = message.minApplicableSoftwareVersion)
    message.maxApplicableSoftwareVersion !== undefined && (obj.maxApplicableSoftwareVersion = message.maxApplicableSoftwareVersion)
    message.releaseNotesUrl !== undefined && (obj.releaseNotesUrl = message.releaseNotesUrl)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateModelVersion>): MsgUpdateModelVersion {
    const message = { ...baseMsgUpdateModelVersion } as MsgUpdateModelVersion
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    if (object.softwareVersion !== undefined && object.softwareVersion !== null) {
      message.softwareVersion = object.softwareVersion
    } else {
      message.softwareVersion = 0
    }
    if (object.softwareVersionString !== undefined && object.softwareVersionString !== null) {
      message.softwareVersionString = object.softwareVersionString
    } else {
      message.softwareVersionString = ''
    }
    if (object.cdVersionNumber !== undefined && object.cdVersionNumber !== null) {
      message.cdVersionNumber = object.cdVersionNumber
    } else {
      message.cdVersionNumber = 0
    }
    if (object.firmwareDigests !== undefined && object.firmwareDigests !== null) {
      message.firmwareDigests = object.firmwareDigests
    } else {
      message.firmwareDigests = ''
    }
    if (object.softwareVersionValid !== undefined && object.softwareVersionValid !== null) {
      message.softwareVersionValid = object.softwareVersionValid
    } else {
      message.softwareVersionValid = false
    }
    if (object.otaUrl !== undefined && object.otaUrl !== null) {
      message.otaUrl = object.otaUrl
    } else {
      message.otaUrl = ''
    }
    if (object.otaFileSize !== undefined && object.otaFileSize !== null) {
      message.otaFileSize = object.otaFileSize
    } else {
      message.otaFileSize = 0
    }
    if (object.otaChecksum !== undefined && object.otaChecksum !== null) {
      message.otaChecksum = object.otaChecksum
    } else {
      message.otaChecksum = ''
    }
    if (object.otaChecksumType !== undefined && object.otaChecksumType !== null) {
      message.otaChecksumType = object.otaChecksumType
    } else {
      message.otaChecksumType = 0
    }
    if (object.minApplicableSoftwareVersion !== undefined && object.minApplicableSoftwareVersion !== null) {
      message.minApplicableSoftwareVersion = object.minApplicableSoftwareVersion
    } else {
      message.minApplicableSoftwareVersion = 0
    }
    if (object.maxApplicableSoftwareVersion !== undefined && object.maxApplicableSoftwareVersion !== null) {
      message.maxApplicableSoftwareVersion = object.maxApplicableSoftwareVersion
    } else {
      message.maxApplicableSoftwareVersion = 0
    }
    if (object.releaseNotesUrl !== undefined && object.releaseNotesUrl !== null) {
      message.releaseNotesUrl = object.releaseNotesUrl
    } else {
      message.releaseNotesUrl = ''
    }
    return message
  }
}

const baseMsgUpdateModelVersionResponse: object = {}

export const MsgUpdateModelVersionResponse = {
  encode(_: MsgUpdateModelVersionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateModelVersionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateModelVersionResponse } as MsgUpdateModelVersionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateModelVersionResponse {
    const message = { ...baseMsgUpdateModelVersionResponse } as MsgUpdateModelVersionResponse
    return message
  },

  toJSON(_: MsgUpdateModelVersionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateModelVersionResponse>): MsgUpdateModelVersionResponse {
    const message = { ...baseMsgUpdateModelVersionResponse } as MsgUpdateModelVersionResponse
    return message
  }
}

const baseMsgDeleteModelVersion: object = { creator: '', vid: 0, pid: 0, softwareVersion: 0 }

export const MsgDeleteModelVersion = {
  encode(message: MsgDeleteModelVersion, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    if (message.softwareVersion !== 0) {
      writer.uint32(32).uint64(message.softwareVersion)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteModelVersion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteModelVersion } as MsgDeleteModelVersion
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        case 4:
          message.softwareVersion = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteModelVersion {
    const message = { ...baseMsgDeleteModelVersion } as MsgDeleteModelVersion
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    if (object.softwareVersion !== undefined && object.softwareVersion !== null) {
      message.softwareVersion = Number(object.softwareVersion)
    } else {
      message.softwareVersion = 0
    }
    return message
  },

  toJSON(message: MsgDeleteModelVersion): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    message.softwareVersion !== undefined && (obj.softwareVersion = message.softwareVersion)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteModelVersion>): MsgDeleteModelVersion {
    const message = { ...baseMsgDeleteModelVersion } as MsgDeleteModelVersion
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    if (object.softwareVersion !== undefined && object.softwareVersion !== null) {
      message.softwareVersion = object.softwareVersion
    } else {
      message.softwareVersion = 0
    }
    return message
  }
}

const baseMsgDeleteModelVersionResponse: object = {}

export const MsgDeleteModelVersionResponse = {
  encode(_: MsgDeleteModelVersionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteModelVersionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteModelVersionResponse } as MsgDeleteModelVersionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteModelVersionResponse {
    const message = { ...baseMsgDeleteModelVersionResponse } as MsgDeleteModelVersionResponse
    return message
  },

  toJSON(_: MsgDeleteModelVersionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteModelVersionResponse>): MsgDeleteModelVersionResponse {
    const message = { ...baseMsgDeleteModelVersionResponse } as MsgDeleteModelVersionResponse
    return message
  }
}

const baseMsgCreateModelVersions: object = { creator: '', vid: 0, pid: 0, softwareVersions: 0 }

export const MsgCreateModelVersions = {
  encode(message: MsgCreateModelVersions, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    writer.uint32(34).fork()
    for (const v of message.softwareVersions) {
      writer.uint64(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateModelVersions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateModelVersions } as MsgCreateModelVersions
    message.softwareVersions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.softwareVersions.push(longToNumber(reader.uint64() as Long))
            }
          } else {
            message.softwareVersions.push(longToNumber(reader.uint64() as Long))
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateModelVersions {
    const message = { ...baseMsgCreateModelVersions } as MsgCreateModelVersions
    message.softwareVersions = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    if (object.softwareVersions !== undefined && object.softwareVersions !== null) {
      for (const e of object.softwareVersions) {
        message.softwareVersions.push(Number(e))
      }
    }
    return message
  },

  toJSON(message: MsgCreateModelVersions): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    if (message.softwareVersions) {
      obj.softwareVersions = message.softwareVersions.map((e) => e)
    } else {
      obj.softwareVersions = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateModelVersions>): MsgCreateModelVersions {
    const message = { ...baseMsgCreateModelVersions } as MsgCreateModelVersions
    message.softwareVersions = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    if (object.softwareVersions !== undefined && object.softwareVersions !== null) {
      for (const e of object.softwareVersions) {
        message.softwareVersions.push(e)
      }
    }
    return message
  }
}

const baseMsgCreateModelVersionsResponse: object = {}

export const MsgCreateModelVersionsResponse = {
  encode(_: MsgCreateModelVersionsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateModelVersionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateModelVersionsResponse } as MsgCreateModelVersionsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateModelVersionsResponse {
    const message = { ...baseMsgCreateModelVersionsResponse } as MsgCreateModelVersionsResponse
    return message
  },

  toJSON(_: MsgCreateModelVersionsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateModelVersionsResponse>): MsgCreateModelVersionsResponse {
    const message = { ...baseMsgCreateModelVersionsResponse } as MsgCreateModelVersionsResponse
    return message
  }
}

const baseMsgUpdateModelVersions: object = { creator: '', vid: 0, pid: 0, softwareVersions: 0 }

export const MsgUpdateModelVersions = {
  encode(message: MsgUpdateModelVersions, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    writer.uint32(34).fork()
    for (const v of message.softwareVersions) {
      writer.uint64(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateModelVersions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateModelVersions } as MsgUpdateModelVersions
    message.softwareVersions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.softwareVersions.push(longToNumber(reader.uint64() as Long))
            }
          } else {
            message.softwareVersions.push(longToNumber(reader.uint64() as Long))
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateModelVersions {
    const message = { ...baseMsgUpdateModelVersions } as MsgUpdateModelVersions
    message.softwareVersions = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    if (object.softwareVersions !== undefined && object.softwareVersions !== null) {
      for (const e of object.softwareVersions) {
        message.softwareVersions.push(Number(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateModelVersions): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    if (message.softwareVersions) {
      obj.softwareVersions = message.softwareVersions.map((e) => e)
    } else {
      obj.softwareVersions = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateModelVersions>): MsgUpdateModelVersions {
    const message = { ...baseMsgUpdateModelVersions } as MsgUpdateModelVersions
    message.softwareVersions = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    if (object.softwareVersions !== undefined && object.softwareVersions !== null) {
      for (const e of object.softwareVersions) {
        message.softwareVersions.push(e)
      }
    }
    return message
  }
}

const baseMsgUpdateModelVersionsResponse: object = {}

export const MsgUpdateModelVersionsResponse = {
  encode(_: MsgUpdateModelVersionsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateModelVersionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateModelVersionsResponse } as MsgUpdateModelVersionsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateModelVersionsResponse {
    const message = { ...baseMsgUpdateModelVersionsResponse } as MsgUpdateModelVersionsResponse
    return message
  },

  toJSON(_: MsgUpdateModelVersionsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateModelVersionsResponse>): MsgUpdateModelVersionsResponse {
    const message = { ...baseMsgUpdateModelVersionsResponse } as MsgUpdateModelVersionsResponse
    return message
  }
}

const baseMsgDeleteModelVersions: object = { creator: '', vid: 0, pid: 0 }

export const MsgDeleteModelVersions = {
  encode(message: MsgDeleteModelVersions, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.vid !== 0) {
      writer.uint32(16).int32(message.vid)
    }
    if (message.pid !== 0) {
      writer.uint32(24).int32(message.pid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteModelVersions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteModelVersions } as MsgDeleteModelVersions
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.vid = reader.int32()
          break
        case 3:
          message.pid = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteModelVersions {
    const message = { ...baseMsgDeleteModelVersions } as MsgDeleteModelVersions
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = Number(object.vid)
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = Number(object.pid)
    } else {
      message.pid = 0
    }
    return message
  },

  toJSON(message: MsgDeleteModelVersions): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.vid !== undefined && (obj.vid = message.vid)
    message.pid !== undefined && (obj.pid = message.pid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteModelVersions>): MsgDeleteModelVersions {
    const message = { ...baseMsgDeleteModelVersions } as MsgDeleteModelVersions
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.vid !== undefined && object.vid !== null) {
      message.vid = object.vid
    } else {
      message.vid = 0
    }
    if (object.pid !== undefined && object.pid !== null) {
      message.pid = object.pid
    } else {
      message.pid = 0
    }
    return message
  }
}

const baseMsgDeleteModelVersionsResponse: object = {}

export const MsgDeleteModelVersionsResponse = {
  encode(_: MsgDeleteModelVersionsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteModelVersionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteModelVersionsResponse } as MsgDeleteModelVersionsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteModelVersionsResponse {
    const message = { ...baseMsgDeleteModelVersionsResponse } as MsgDeleteModelVersionsResponse
    return message
  },

  toJSON(_: MsgDeleteModelVersionsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteModelVersionsResponse>): MsgDeleteModelVersionsResponse {
    const message = { ...baseMsgDeleteModelVersionsResponse } as MsgDeleteModelVersionsResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateModel(request: MsgCreateModel): Promise<MsgCreateModelResponse>
  UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse>
  DeleteModel(request: MsgDeleteModel): Promise<MsgDeleteModelResponse>
  CreateModelVersion(request: MsgCreateModelVersion): Promise<MsgCreateModelVersionResponse>
  UpdateModelVersion(request: MsgUpdateModelVersion): Promise<MsgUpdateModelVersionResponse>
  DeleteModelVersion(request: MsgDeleteModelVersion): Promise<MsgDeleteModelVersionResponse>
  CreateModelVersions(request: MsgCreateModelVersions): Promise<MsgCreateModelVersionsResponse>
  UpdateModelVersions(request: MsgUpdateModelVersions): Promise<MsgUpdateModelVersionsResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteModelVersions(request: MsgDeleteModelVersions): Promise<MsgDeleteModelVersionsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateModel(request: MsgCreateModel): Promise<MsgCreateModelResponse> {
    const data = MsgCreateModel.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'CreateModel', data)
    return promise.then((data) => MsgCreateModelResponse.decode(new Reader(data)))
  }

  UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse> {
    const data = MsgUpdateModel.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'UpdateModel', data)
    return promise.then((data) => MsgUpdateModelResponse.decode(new Reader(data)))
  }

  DeleteModel(request: MsgDeleteModel): Promise<MsgDeleteModelResponse> {
    const data = MsgDeleteModel.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'DeleteModel', data)
    return promise.then((data) => MsgDeleteModelResponse.decode(new Reader(data)))
  }

  CreateModelVersion(request: MsgCreateModelVersion): Promise<MsgCreateModelVersionResponse> {
    const data = MsgCreateModelVersion.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'CreateModelVersion', data)
    return promise.then((data) => MsgCreateModelVersionResponse.decode(new Reader(data)))
  }

  UpdateModelVersion(request: MsgUpdateModelVersion): Promise<MsgUpdateModelVersionResponse> {
    const data = MsgUpdateModelVersion.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'UpdateModelVersion', data)
    return promise.then((data) => MsgUpdateModelVersionResponse.decode(new Reader(data)))
  }

  DeleteModelVersion(request: MsgDeleteModelVersion): Promise<MsgDeleteModelVersionResponse> {
    const data = MsgDeleteModelVersion.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'DeleteModelVersion', data)
    return promise.then((data) => MsgDeleteModelVersionResponse.decode(new Reader(data)))
  }

  CreateModelVersions(request: MsgCreateModelVersions): Promise<MsgCreateModelVersionsResponse> {
    const data = MsgCreateModelVersions.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'CreateModelVersions', data)
    return promise.then((data) => MsgCreateModelVersionsResponse.decode(new Reader(data)))
  }

  UpdateModelVersions(request: MsgUpdateModelVersions): Promise<MsgUpdateModelVersionsResponse> {
    const data = MsgUpdateModelVersions.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'UpdateModelVersions', data)
    return promise.then((data) => MsgUpdateModelVersionsResponse.decode(new Reader(data)))
  }

  DeleteModelVersions(request: MsgDeleteModelVersions): Promise<MsgDeleteModelVersionsResponse> {
    const data = MsgDeleteModelVersions.encode(request).finish()
    const promise = this.rpc.request('zigbeealliance.distributedcomplianceledger.model.Msg', 'DeleteModelVersions', data)
    return promise.then((data) => MsgDeleteModelVersionsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
