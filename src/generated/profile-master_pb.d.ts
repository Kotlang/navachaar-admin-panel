import * as jspb from 'google-protobuf'



export class GetProfileMasterRequest extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): GetProfileMasterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileMasterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileMasterRequest): GetProfileMasterRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileMasterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileMasterRequest;
  static deserializeBinaryFromReader(message: GetProfileMasterRequest, reader: jspb.BinaryReader): GetProfileMasterRequest;
}

export namespace GetProfileMasterRequest {
  export type AsObject = {
    language: string,
  }
}

export class ProfileMasterResponse extends jspb.Message {
  getProfilemasterlistList(): Array<ProfileMasterProto>;
  setProfilemasterlistList(value: Array<ProfileMasterProto>): ProfileMasterResponse;
  clearProfilemasterlistList(): ProfileMasterResponse;
  addProfilemasterlist(value?: ProfileMasterProto, index?: number): ProfileMasterProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileMasterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileMasterResponse): ProfileMasterResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileMasterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileMasterResponse;
  static deserializeBinaryFromReader(message: ProfileMasterResponse, reader: jspb.BinaryReader): ProfileMasterResponse;
}

export namespace ProfileMasterResponse {
  export type AsObject = {
    profilemasterlistList: Array<ProfileMasterProto.AsObject>,
  }
}

export class ProfileMasterProto extends jspb.Message {
  getField(): string;
  setField(value: string): ProfileMasterProto;

  getType(): string;
  setType(value: string): ProfileMasterProto;

  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): ProfileMasterProto;
  clearOptionsList(): ProfileMasterProto;
  addOptions(value: string, index?: number): ProfileMasterProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileMasterProto.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileMasterProto): ProfileMasterProto.AsObject;
  static serializeBinaryToWriter(message: ProfileMasterProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileMasterProto;
  static deserializeBinaryFromReader(message: ProfileMasterProto, reader: jspb.BinaryReader): ProfileMasterProto;
}

export namespace ProfileMasterProto {
  export type AsObject = {
    field: string,
    type: string,
    optionsList: Array<string>,
  }
}

