import * as jspb from 'google-protobuf'



export class GetAllLabelsByLanguageRequest extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): GetAllLabelsByLanguageRequest;

  getDomain(): string;
  setDomain(value: string): GetAllLabelsByLanguageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllLabelsByLanguageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllLabelsByLanguageRequest): GetAllLabelsByLanguageRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllLabelsByLanguageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllLabelsByLanguageRequest;
  static deserializeBinaryFromReader(message: GetAllLabelsByLanguageRequest, reader: jspb.BinaryReader): GetAllLabelsByLanguageRequest;
}

export namespace GetAllLabelsByLanguageRequest {
  export type AsObject = {
    language: string,
    domain: string,
  }
}

export class GetLabelRequest extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): GetLabelRequest;

  getKey(): string;
  setKey(value: string): GetLabelRequest;

  getDomain(): string;
  setDomain(value: string): GetLabelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelRequest): GetLabelRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelRequest;
  static deserializeBinaryFromReader(message: GetLabelRequest, reader: jspb.BinaryReader): GetLabelRequest;
}

export namespace GetLabelRequest {
  export type AsObject = {
    language: string,
    key: string,
    domain: string,
  }
}

export class LocalizedLabelsResponse extends jspb.Message {
  getLocalizedlabellistList(): Array<LocalizedLabel>;
  setLocalizedlabellistList(value: Array<LocalizedLabel>): LocalizedLabelsResponse;
  clearLocalizedlabellistList(): LocalizedLabelsResponse;
  addLocalizedlabellist(value?: LocalizedLabel, index?: number): LocalizedLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedLabelsResponse): LocalizedLabelsResponse.AsObject;
  static serializeBinaryToWriter(message: LocalizedLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedLabelsResponse;
  static deserializeBinaryFromReader(message: LocalizedLabelsResponse, reader: jspb.BinaryReader): LocalizedLabelsResponse;
}

export namespace LocalizedLabelsResponse {
  export type AsObject = {
    localizedlabellistList: Array<LocalizedLabel.AsObject>,
  }
}

export class LocalizedLabel extends jspb.Message {
  getKey(): string;
  setKey(value: string): LocalizedLabel;

  getValue(): string;
  setValue(value: string): LocalizedLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedLabel.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedLabel): LocalizedLabel.AsObject;
  static serializeBinaryToWriter(message: LocalizedLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedLabel;
  static deserializeBinaryFromReader(message: LocalizedLabel, reader: jspb.BinaryReader): LocalizedLabel;
}

export namespace LocalizedLabel {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class GetCurrentVersionRequest extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): GetCurrentVersionRequest;

  getLanguage(): string;
  setLanguage(value: string): GetCurrentVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentVersionRequest): GetCurrentVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetCurrentVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentVersionRequest;
  static deserializeBinaryFromReader(message: GetCurrentVersionRequest, reader: jspb.BinaryReader): GetCurrentVersionRequest;
}

export namespace GetCurrentVersionRequest {
  export type AsObject = {
    domain: string,
    language: string,
  }
}

export class GetCurrentVersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): GetCurrentVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentVersionResponse): GetCurrentVersionResponse.AsObject;
  static serializeBinaryToWriter(message: GetCurrentVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentVersionResponse;
  static deserializeBinaryFromReader(message: GetCurrentVersionResponse, reader: jspb.BinaryReader): GetCurrentVersionResponse;
}

export namespace GetCurrentVersionResponse {
  export type AsObject = {
    version: string,
  }
}

