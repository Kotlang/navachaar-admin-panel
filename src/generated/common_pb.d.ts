import * as jspb from 'google-protobuf'



export class AddressProto extends jspb.Message {
  getCity(): string;
  setCity(value: string): AddressProto;

  getState(): string;
  setState(value: string): AddressProto;

  getCountry(): string;
  setCountry(value: string): AddressProto;

  getAddress(): string;
  setAddress(value: string): AddressProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressProto.AsObject;
  static toObject(includeInstance: boolean, msg: AddressProto): AddressProto.AsObject;
  static serializeBinaryToWriter(message: AddressProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressProto;
  static deserializeBinaryFromReader(message: AddressProto, reader: jspb.BinaryReader): AddressProto;
}

export namespace AddressProto {
  export type AsObject = {
    city: string,
    state: string,
    country: string,
    address: string,
  }
}

export class UserProfileProto extends jspb.Message {
  getLoginid(): string;
  setLoginid(value: string): UserProfileProto;

  getName(): string;
  setName(value: string): UserProfileProto;

  getPhotourl(): string;
  setPhotourl(value: string): UserProfileProto;

  getGender(): string;
  setGender(value: string): UserProfileProto;

  getIsverified(): boolean;
  setIsverified(value: boolean): UserProfileProto;

  getDomain(): string;
  setDomain(value: string): UserProfileProto;

  getPreferredlanguage(): string;
  setPreferredlanguage(value: string): UserProfileProto;

  getCreatedon(): number;
  setCreatedon(value: number): UserProfileProto;

  getMetadatamap(): string;
  setMetadatamap(value: string): UserProfileProto;

  getAddressesMap(): jspb.Map<string, AddressProto>;
  clearAddressesMap(): UserProfileProto;

  getEmail(): string;
  setEmail(value: string): UserProfileProto;

  getPhone(): string;
  setPhone(value: string): UserProfileProto;

  getAttributesList(): Array<string>;
  setAttributesList(value: Array<string>): UserProfileProto;
  clearAttributesList(): UserProfileProto;
  addAttributes(value: string, index?: number): UserProfileProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfileProto.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfileProto): UserProfileProto.AsObject;
  static serializeBinaryToWriter(message: UserProfileProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfileProto;
  static deserializeBinaryFromReader(message: UserProfileProto, reader: jspb.BinaryReader): UserProfileProto;
}

export namespace UserProfileProto {
  export type AsObject = {
    loginid: string,
    name: string,
    photourl: string,
    gender: string,
    isverified: boolean,
    domain: string,
    preferredlanguage: string,
    createdon: number,
    metadatamap: string,
    addressesMap: Array<[string, AddressProto.AsObject]>,
    email: string,
    phone: string,
    attributesList: Array<string>,
  }
}

export class StatusResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): StatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    status: string,
  }
}

