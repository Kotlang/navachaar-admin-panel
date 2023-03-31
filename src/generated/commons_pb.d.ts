import * as jspb from 'google-protobuf'



export class SocialStatusResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): SocialStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SocialStatusResponse): SocialStatusResponse.AsObject;
  static serializeBinaryToWriter(message: SocialStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialStatusResponse;
  static deserializeBinaryFromReader(message: SocialStatusResponse, reader: jspb.BinaryReader): SocialStatusResponse;
}

export namespace SocialStatusResponse {
  export type AsObject = {
    status: string,
  }
}

export class SocialProfile extends jspb.Message {
  getPhotourl(): string;
  setPhotourl(value: string): SocialProfile;

  getName(): string;
  setName(value: string): SocialProfile;

  getOccupation(): string;
  setOccupation(value: string): SocialProfile;

  getUserid(): string;
  setUserid(value: string): SocialProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SocialProfile): SocialProfile.AsObject;
  static serializeBinaryToWriter(message: SocialProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialProfile;
  static deserializeBinaryFromReader(message: SocialProfile, reader: jspb.BinaryReader): SocialProfile;
}

export namespace SocialProfile {
  export type AsObject = {
    photourl: string,
    name: string,
    occupation: string,
    userid: string,
  }
}

