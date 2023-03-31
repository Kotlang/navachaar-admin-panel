import * as jspb from 'google-protobuf'

import * as commons_pb from './commons_pb';


export class MediaUrl extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MediaUrl;

  getMimetype(): string;
  setMimetype(value: string): MediaUrl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaUrl.AsObject;
  static toObject(includeInstance: boolean, msg: MediaUrl): MediaUrl.AsObject;
  static serializeBinaryToWriter(message: MediaUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaUrl;
  static deserializeBinaryFromReader(message: MediaUrl, reader: jspb.BinaryReader): MediaUrl;
}

export namespace MediaUrl {
  export type AsObject = {
    url: string,
    mimetype: string,
  }
}

export class WebPreview extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): WebPreview;

  getPreviewimage(): string;
  setPreviewimage(value: string): WebPreview;

  getUrl(): string;
  setUrl(value: string): WebPreview;

  getDescription(): string;
  setDescription(value: string): WebPreview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebPreview.AsObject;
  static toObject(includeInstance: boolean, msg: WebPreview): WebPreview.AsObject;
  static serializeBinaryToWriter(message: WebPreview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebPreview;
  static deserializeBinaryFromReader(message: WebPreview, reader: jspb.BinaryReader): WebPreview;
}

export namespace WebPreview {
  export type AsObject = {
    title: string,
    previewimage: string,
    url: string,
    description: string,
  }
}

export class UserPostRequest extends jspb.Message {
  getPost(): string;
  setPost(value: string): UserPostRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UserPostRequest;
  clearTagsList(): UserPostRequest;
  addTags(value: string, index?: number): UserPostRequest;

  getReferencepost(): string;
  setReferencepost(value: string): UserPostRequest;

  getTitle(): string;
  setTitle(value: string): UserPostRequest;

  getMediaurlsList(): Array<MediaUrl>;
  setMediaurlsList(value: Array<MediaUrl>): UserPostRequest;
  clearMediaurlsList(): UserPostRequest;
  addMediaurls(value?: MediaUrl, index?: number): MediaUrl;

  getWebpreviewsList(): Array<WebPreview>;
  setWebpreviewsList(value: Array<WebPreview>): UserPostRequest;
  clearWebpreviewsList(): UserPostRequest;
  addWebpreviews(value?: WebPreview, index?: number): WebPreview;

  getPosttype(): UserPostRequest.PostType;
  setPosttype(value: UserPostRequest.PostType): UserPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserPostRequest): UserPostRequest.AsObject;
  static serializeBinaryToWriter(message: UserPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPostRequest;
  static deserializeBinaryFromReader(message: UserPostRequest, reader: jspb.BinaryReader): UserPostRequest;
}

export namespace UserPostRequest {
  export type AsObject = {
    post: string,
    tagsList: Array<string>,
    referencepost: string,
    title: string,
    mediaurlsList: Array<MediaUrl.AsObject>,
    webpreviewsList: Array<WebPreview.AsObject>,
    posttype: UserPostRequest.PostType,
  }

  export enum PostType { 
    FEED_POST = 0,
    QNA_QUESTION = 1,
    QNA_ANSWER = 2,
  }
}

export class UserPostProto extends jspb.Message {
  getPost(): string;
  setPost(value: string): UserPostProto;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UserPostProto;
  clearTagsList(): UserPostProto;
  addTags(value: string, index?: number): UserPostProto;

  getPostid(): string;
  setPostid(value: string): UserPostProto;

  getMediaurlsList(): Array<MediaUrl>;
  setMediaurlsList(value: Array<MediaUrl>): UserPostProto;
  clearMediaurlsList(): UserPostProto;
  addMediaurls(value?: MediaUrl, index?: number): MediaUrl;

  getWebpreviewsList(): Array<WebPreview>;
  setWebpreviewsList(value: Array<WebPreview>): UserPostProto;
  clearWebpreviewsList(): UserPostProto;
  addWebpreviews(value?: WebPreview, index?: number): WebPreview;

  getCreatedon(): number;
  setCreatedon(value: number): UserPostProto;

  getReferencepost(): string;
  setReferencepost(value: string): UserPostProto;

  getUserid(): string;
  setUserid(value: string): UserPostProto;

  getAuthorinfo(): commons_pb.SocialProfile | undefined;
  setAuthorinfo(value?: commons_pb.SocialProfile): UserPostProto;
  hasAuthorinfo(): boolean;
  clearAuthorinfo(): UserPostProto;

  getNumlikes(): number;
  setNumlikes(value: number): UserPostProto;

  getNumreplies(): number;
  setNumreplies(value: number): UserPostProto;

  getNumshares(): number;
  setNumshares(value: number): UserPostProto;

  getTitle(): string;
  setTitle(value: string): UserPostProto;

  getHasfeeduserliked(): boolean;
  setHasfeeduserliked(value: boolean): UserPostProto;

  getAnswersthreadList(): Array<UserPostProto>;
  setAnswersthreadList(value: Array<UserPostProto>): UserPostProto;
  clearAnswersthreadList(): UserPostProto;
  addAnswersthread(value?: UserPostProto, index?: number): UserPostProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPostProto.AsObject;
  static toObject(includeInstance: boolean, msg: UserPostProto): UserPostProto.AsObject;
  static serializeBinaryToWriter(message: UserPostProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPostProto;
  static deserializeBinaryFromReader(message: UserPostProto, reader: jspb.BinaryReader): UserPostProto;
}

export namespace UserPostProto {
  export type AsObject = {
    post: string,
    tagsList: Array<string>,
    postid: string,
    mediaurlsList: Array<MediaUrl.AsObject>,
    webpreviewsList: Array<WebPreview.AsObject>,
    createdon: number,
    referencepost: string,
    userid: string,
    authorinfo?: commons_pb.SocialProfile.AsObject,
    numlikes: number,
    numreplies: number,
    numshares: number,
    title: string,
    hasfeeduserliked: boolean,
    answersthreadList: Array<UserPostProto.AsObject>,
  }
}

export class DeletePostRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeletePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostRequest): DeletePostRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostRequest;
  static deserializeBinaryFromReader(message: DeletePostRequest, reader: jspb.BinaryReader): DeletePostRequest;
}

export namespace DeletePostRequest {
  export type AsObject = {
    id: string,
  }
}

export class FeedFilters extends jspb.Message {
  getTag(): string;
  setTag(value: string): FeedFilters;

  getUserid(): string;
  setUserid(value: string): FeedFilters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedFilters.AsObject;
  static toObject(includeInstance: boolean, msg: FeedFilters): FeedFilters.AsObject;
  static serializeBinaryToWriter(message: FeedFilters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedFilters;
  static deserializeBinaryFromReader(message: FeedFilters, reader: jspb.BinaryReader): FeedFilters;
}

export namespace FeedFilters {
  export type AsObject = {
    tag: string,
    userid: string,
  }
}

export class GetFeedRequest extends jspb.Message {
  getPosttype(): GetFeedRequest.PostType;
  setPosttype(value: GetFeedRequest.PostType): GetFeedRequest;

  getFilters(): FeedFilters | undefined;
  setFilters(value?: FeedFilters): GetFeedRequest;
  hasFilters(): boolean;
  clearFilters(): GetFeedRequest;

  getPagesize(): number;
  setPagesize(value: number): GetFeedRequest;

  getPagenumber(): number;
  setPagenumber(value: number): GetFeedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedRequest): GetFeedRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedRequest;
  static deserializeBinaryFromReader(message: GetFeedRequest, reader: jspb.BinaryReader): GetFeedRequest;
}

export namespace GetFeedRequest {
  export type AsObject = {
    posttype: GetFeedRequest.PostType,
    filters?: FeedFilters.AsObject,
    pagesize: number,
    pagenumber: number,
  }

  export enum PostType { 
    FEED_POST = 0,
    QNA_QUESTION = 1,
  }
}

export class FeedResponse extends jspb.Message {
  getPostsList(): Array<UserPostProto>;
  setPostsList(value: Array<UserPostProto>): FeedResponse;
  clearPostsList(): FeedResponse;
  addPosts(value?: UserPostProto, index?: number): UserPostProto;

  getPagenumber(): number;
  setPagenumber(value: number): FeedResponse;

  getPagesize(): number;
  setPagesize(value: number): FeedResponse;

  getTotalpages(): number;
  setTotalpages(value: number): FeedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeedResponse): FeedResponse.AsObject;
  static serializeBinaryToWriter(message: FeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedResponse;
  static deserializeBinaryFromReader(message: FeedResponse, reader: jspb.BinaryReader): FeedResponse;
}

export namespace FeedResponse {
  export type AsObject = {
    postsList: Array<UserPostProto.AsObject>,
    pagenumber: number,
    pagesize: number,
    totalpages: number,
  }
}

export class MediaUploadRequest extends jspb.Message {
  getMediaextension(): string;
  setMediaextension(value: string): MediaUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MediaUploadRequest): MediaUploadRequest.AsObject;
  static serializeBinaryToWriter(message: MediaUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaUploadRequest;
  static deserializeBinaryFromReader(message: MediaUploadRequest, reader: jspb.BinaryReader): MediaUploadRequest;
}

export namespace MediaUploadRequest {
  export type AsObject = {
    mediaextension: string,
  }
}

export class GetPostRequest extends jspb.Message {
  getPostid(): string;
  setPostid(value: string): GetPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostRequest): GetPostRequest.AsObject;
  static serializeBinaryToWriter(message: GetPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostRequest;
  static deserializeBinaryFromReader(message: GetPostRequest, reader: jspb.BinaryReader): GetPostRequest;
}

export namespace GetPostRequest {
  export type AsObject = {
    postid: string,
  }
}

export class GetBookmarksRequest extends jspb.Message {
  getPagesize(): number;
  setPagesize(value: number): GetBookmarksRequest;

  getPagenumber(): number;
  setPagenumber(value: number): GetBookmarksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookmarksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookmarksRequest): GetBookmarksRequest.AsObject;
  static serializeBinaryToWriter(message: GetBookmarksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookmarksRequest;
  static deserializeBinaryFromReader(message: GetBookmarksRequest, reader: jspb.BinaryReader): GetBookmarksRequest;
}

export namespace GetBookmarksRequest {
  export type AsObject = {
    pagesize: number,
    pagenumber: number,
  }
}

export class GetTagsRequest extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): GetTagsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTagsRequest): GetTagsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagsRequest;
  static deserializeBinaryFromReader(message: GetTagsRequest, reader: jspb.BinaryReader): GetTagsRequest;
}

export namespace GetTagsRequest {
  export type AsObject = {
    language: string,
  }
}

export class TagListResponse extends jspb.Message {
  getTagList(): Array<string>;
  setTagList(value: Array<string>): TagListResponse;
  clearTagList(): TagListResponse;
  addTag(value: string, index?: number): TagListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TagListResponse): TagListResponse.AsObject;
  static serializeBinaryToWriter(message: TagListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagListResponse;
  static deserializeBinaryFromReader(message: TagListResponse, reader: jspb.BinaryReader): TagListResponse;
}

export namespace TagListResponse {
  export type AsObject = {
    tagList: Array<string>,
  }
}

export class MediaUploadURL extends jspb.Message {
  getUploadurl(): string;
  setUploadurl(value: string): MediaUploadURL;

  getMediaurl(): string;
  setMediaurl(value: string): MediaUploadURL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaUploadURL.AsObject;
  static toObject(includeInstance: boolean, msg: MediaUploadURL): MediaUploadURL.AsObject;
  static serializeBinaryToWriter(message: MediaUploadURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaUploadURL;
  static deserializeBinaryFromReader(message: MediaUploadURL, reader: jspb.BinaryReader): MediaUploadURL;
}

export namespace MediaUploadURL {
  export type AsObject = {
    uploadurl: string,
    mediaurl: string,
  }
}

export class UploadPostMediaRequest extends jspb.Message {
  getChunkdata(): Uint8Array | string;
  getChunkdata_asU8(): Uint8Array;
  getChunkdata_asB64(): string;
  setChunkdata(value: Uint8Array | string): UploadPostMediaRequest;

  getMediaextension(): string;
  setMediaextension(value: string): UploadPostMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadPostMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadPostMediaRequest): UploadPostMediaRequest.AsObject;
  static serializeBinaryToWriter(message: UploadPostMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadPostMediaRequest;
  static deserializeBinaryFromReader(message: UploadPostMediaRequest, reader: jspb.BinaryReader): UploadPostMediaRequest;
}

export namespace UploadPostMediaRequest {
  export type AsObject = {
    chunkdata: Uint8Array | string,
    mediaextension: string,
  }
}

export class UploadPostMediaResponse extends jspb.Message {
  getUploadpath(): string;
  setUploadpath(value: string): UploadPostMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadPostMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadPostMediaResponse): UploadPostMediaResponse.AsObject;
  static serializeBinaryToWriter(message: UploadPostMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadPostMediaResponse;
  static deserializeBinaryFromReader(message: UploadPostMediaResponse, reader: jspb.BinaryReader): UploadPostMediaResponse;
}

export namespace UploadPostMediaResponse {
  export type AsObject = {
    uploadpath: string,
  }
}

