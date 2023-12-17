import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb'; // proto import: "common.proto"


export class CreateProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProfileRequest;

  getGender(): common_pb.Gender;
  setGender(value: common_pb.Gender): CreateProfileRequest;

  getPhotourl(): string;
  setPhotourl(value: string): CreateProfileRequest;

  getBio(): string;
  setBio(value: string): CreateProfileRequest;

  getAddressesMap(): jspb.Map<string, common_pb.AddressProto>;
  clearAddressesMap(): CreateProfileRequest;

  getPreferredlanguage(): string;
  setPreferredlanguage(value: string): CreateProfileRequest;

  getFarmingtype(): common_pb.FarmingType;
  setFarmingtype(value: common_pb.FarmingType): CreateProfileRequest;

  getCropsList(): Array<string>;
  setCropsList(value: Array<string>): CreateProfileRequest;
  clearCropsList(): CreateProfileRequest;
  addCrops(value: string, index?: number): CreateProfileRequest;

  getAttributesList(): Array<string>;
  setAttributesList(value: Array<string>): CreateProfileRequest;
  clearAttributesList(): CreateProfileRequest;
  addAttributes(value: string, index?: number): CreateProfileRequest;

  getCertificationdetails(): common_pb.CertificationDetails | undefined;
  setCertificationdetails(value?: common_pb.CertificationDetails): CreateProfileRequest;
  hasCertificationdetails(): boolean;
  clearCertificationdetails(): CreateProfileRequest;

  getYearssinceorganicfarming(): number;
  setYearssinceorganicfarming(value: number): CreateProfileRequest;

  getLandsizeinacres(): common_pb.LandSizeInAcres;
  setLandsizeinacres(value: common_pb.LandSizeInAcres): CreateProfileRequest;

  getLocation(): common_pb.Location | undefined;
  setLocation(value?: common_pb.Location): CreateProfileRequest;
  hasLocation(): boolean;
  clearLocation(): CreateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProfileRequest): CreateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProfileRequest;
  static deserializeBinaryFromReader(message: CreateProfileRequest, reader: jspb.BinaryReader): CreateProfileRequest;
}

export namespace CreateProfileRequest {
  export type AsObject = {
    name: string,
    gender: common_pb.Gender,
    photourl: string,
    bio: string,
    addressesMap: Array<[string, common_pb.AddressProto.AsObject]>,
    preferredlanguage: string,
    farmingtype: common_pb.FarmingType,
    cropsList: Array<string>,
    attributesList: Array<string>,
    certificationdetails?: common_pb.CertificationDetails.AsObject,
    yearssinceorganicfarming: number,
    landsizeinacres: common_pb.LandSizeInAcres,
    location?: common_pb.Location.AsObject,
  }
}

export class GetProfileRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): GetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
  static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
  export type AsObject = {
    userid: string,
  }
}

export class ProfileImageUploadRequest extends jspb.Message {
  getMediaextension(): string;
  setMediaextension(value: string): ProfileImageUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileImageUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileImageUploadRequest): ProfileImageUploadRequest.AsObject;
  static serializeBinaryToWriter(message: ProfileImageUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileImageUploadRequest;
  static deserializeBinaryFromReader(message: ProfileImageUploadRequest, reader: jspb.BinaryReader): ProfileImageUploadRequest;
}

export namespace ProfileImageUploadRequest {
  export type AsObject = {
    mediaextension: string,
  }
}

export class ProfileImageUploadURL extends jspb.Message {
  getUploadurl(): string;
  setUploadurl(value: string): ProfileImageUploadURL;

  getMediaurl(): string;
  setMediaurl(value: string): ProfileImageUploadURL;

  getInstructions(): string;
  setInstructions(value: string): ProfileImageUploadURL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileImageUploadURL.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileImageUploadURL): ProfileImageUploadURL.AsObject;
  static serializeBinaryToWriter(message: ProfileImageUploadURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileImageUploadURL;
  static deserializeBinaryFromReader(message: ProfileImageUploadURL, reader: jspb.BinaryReader): ProfileImageUploadURL;
}

export namespace ProfileImageUploadURL {
  export type AsObject = {
    uploadurl: string,
    mediaurl: string,
    instructions: string,
  }
}

export class AttributeRequest extends jspb.Message {
  getAttribute(): string;
  setAttribute(value: string): AttributeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeRequest): AttributeRequest.AsObject;
  static serializeBinaryToWriter(message: AttributeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeRequest;
  static deserializeBinaryFromReader(message: AttributeRequest, reader: jspb.BinaryReader): AttributeRequest;
}

export namespace AttributeRequest {
  export type AsObject = {
    attribute: string,
  }
}

export class AttributeResponse extends jspb.Message {
  getProfilesList(): Array<common_pb.UserProfileProto>;
  setProfilesList(value: Array<common_pb.UserProfileProto>): AttributeResponse;
  clearProfilesList(): AttributeResponse;
  addProfiles(value?: common_pb.UserProfileProto, index?: number): common_pb.UserProfileProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeResponse): AttributeResponse.AsObject;
  static serializeBinaryToWriter(message: AttributeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeResponse;
  static deserializeBinaryFromReader(message: AttributeResponse, reader: jspb.BinaryReader): AttributeResponse;
}

export namespace AttributeResponse {
  export type AsObject = {
    profilesList: Array<common_pb.UserProfileProto.AsObject>,
  }
}

export class UploadImageRequest extends jspb.Message {
  getChunkdata(): Uint8Array | string;
  getChunkdata_asU8(): Uint8Array;
  getChunkdata_asB64(): string;
  setChunkdata(value: Uint8Array | string): UploadImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageRequest): UploadImageRequest.AsObject;
  static serializeBinaryToWriter(message: UploadImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageRequest;
  static deserializeBinaryFromReader(message: UploadImageRequest, reader: jspb.BinaryReader): UploadImageRequest;
}

export namespace UploadImageRequest {
  export type AsObject = {
    chunkdata: Uint8Array | string,
  }
}

export class UploadImageResponse extends jspb.Message {
  getUploadpath(): string;
  setUploadpath(value: string): UploadImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageResponse): UploadImageResponse.AsObject;
  static serializeBinaryToWriter(message: UploadImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageResponse;
  static deserializeBinaryFromReader(message: UploadImageResponse, reader: jspb.BinaryReader): UploadImageResponse;
}

export namespace UploadImageResponse {
  export type AsObject = {
    uploadpath: string,
  }
}

export class BulkGetProfileRequest extends jspb.Message {
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): BulkGetProfileRequest;
  clearUseridsList(): BulkGetProfileRequest;
  addUserids(value: string, index?: number): BulkGetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkGetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkGetProfileRequest): BulkGetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: BulkGetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkGetProfileRequest;
  static deserializeBinaryFromReader(message: BulkGetProfileRequest, reader: jspb.BinaryReader): BulkGetProfileRequest;
}

export namespace BulkGetProfileRequest {
  export type AsObject = {
    useridsList: Array<string>,
  }
}

export class BulkGetProfileResponse extends jspb.Message {
  getProfilesList(): Array<common_pb.UserProfileProto>;
  setProfilesList(value: Array<common_pb.UserProfileProto>): BulkGetProfileResponse;
  clearProfilesList(): BulkGetProfileResponse;
  addProfiles(value?: common_pb.UserProfileProto, index?: number): common_pb.UserProfileProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkGetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkGetProfileResponse): BulkGetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: BulkGetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkGetProfileResponse;
  static deserializeBinaryFromReader(message: BulkGetProfileResponse, reader: jspb.BinaryReader): BulkGetProfileResponse;
}

export namespace BulkGetProfileResponse {
  export type AsObject = {
    profilesList: Array<common_pb.UserProfileProto.AsObject>,
  }
}

export class GetProfileByPhoneOrEmailRequest extends jspb.Message {
  getPhone(): string;
  setPhone(value: string): GetProfileByPhoneOrEmailRequest;

  getEmail(): string;
  setEmail(value: string): GetProfileByPhoneOrEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileByPhoneOrEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileByPhoneOrEmailRequest): GetProfileByPhoneOrEmailRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileByPhoneOrEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileByPhoneOrEmailRequest;
  static deserializeBinaryFromReader(message: GetProfileByPhoneOrEmailRequest, reader: jspb.BinaryReader): GetProfileByPhoneOrEmailRequest;
}

export namespace GetProfileByPhoneOrEmailRequest {
  export type AsObject = {
    phone: string,
    email: string,
  }
}

