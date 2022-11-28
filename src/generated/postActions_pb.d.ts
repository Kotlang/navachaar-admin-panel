import * as jspb from 'google-protobuf'

import * as commons_pb from './commons_pb';


export class PostIdRequest extends jspb.Message {
  getPostid(): string;
  setPostid(value: string): PostIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostIdRequest): PostIdRequest.AsObject;
  static serializeBinaryToWriter(message: PostIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostIdRequest;
  static deserializeBinaryFromReader(message: PostIdRequest, reader: jspb.BinaryReader): PostIdRequest;
}

export namespace PostIdRequest {
  export type AsObject = {
    postid: string,
  }
}

