import * as jspb from 'google-protobuf'



export class AddLabelRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): AddLabelRequest;

  getValue(): string;
  setValue(value: string): AddLabelRequest;

  getLanguage(): string;
  setLanguage(value: string): AddLabelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLabelRequest): AddLabelRequest.AsObject;
  static serializeBinaryToWriter(message: AddLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLabelRequest;
  static deserializeBinaryFromReader(message: AddLabelRequest, reader: jspb.BinaryReader): AddLabelRequest;
}

export namespace AddLabelRequest {
  export type AsObject = {
    key: string,
    value: string,
    language: string,
  }
}

export class AddLabelResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): AddLabelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddLabelResponse): AddLabelResponse.AsObject;
  static serializeBinaryToWriter(message: AddLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLabelResponse;
  static deserializeBinaryFromReader(message: AddLabelResponse, reader: jspb.BinaryReader): AddLabelResponse;
}

export namespace AddLabelResponse {
  export type AsObject = {
    status: string,
  }
}

