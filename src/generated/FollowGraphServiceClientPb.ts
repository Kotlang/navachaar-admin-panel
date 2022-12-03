/**
 * @fileoverview gRPC-Web generated client stub for social
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.6.1
// source: followGraph.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as followGraph_pb from './followGraph_pb';
import * as commons_pb from './commons_pb';


export class FollowGraphClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorFollowUser = new grpcWeb.MethodDescriptor(
    '/social.FollowGraph/FollowUser',
    grpcWeb.MethodType.UNARY,
    followGraph_pb.FollowUserRequest,
    commons_pb.SocialStatusResponse,
    (request: followGraph_pb.FollowUserRequest) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  followUser(
    request: followGraph_pb.FollowUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  followUser(
    request: followGraph_pb.FollowUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  followUser(
    request: followGraph_pb.FollowUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.FollowGraph/FollowUser',
        request,
        metadata || {},
        this.methodDescriptorFollowUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.FollowGraph/FollowUser',
    request,
    metadata || {},
    this.methodDescriptorFollowUser);
  }

  methodDescriptorUnFollowUser = new grpcWeb.MethodDescriptor(
    '/social.FollowGraph/UnFollowUser',
    grpcWeb.MethodType.UNARY,
    followGraph_pb.UnFollowUserRequest,
    commons_pb.SocialStatusResponse,
    (request: followGraph_pb.UnFollowUserRequest) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  unFollowUser(
    request: followGraph_pb.UnFollowUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  unFollowUser(
    request: followGraph_pb.UnFollowUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  unFollowUser(
    request: followGraph_pb.UnFollowUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.FollowGraph/UnFollowUser',
        request,
        metadata || {},
        this.methodDescriptorUnFollowUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.FollowGraph/UnFollowUser',
    request,
    metadata || {},
    this.methodDescriptorUnFollowUser);
  }

  methodDescriptorGetFollowers = new grpcWeb.MethodDescriptor(
    '/social.FollowGraph/GetFollowers',
    grpcWeb.MethodType.UNARY,
    followGraph_pb.GetFollowersRequest,
    followGraph_pb.GetFollowersResponse,
    (request: followGraph_pb.GetFollowersRequest) => {
      return request.serializeBinary();
    },
    followGraph_pb.GetFollowersResponse.deserializeBinary
  );

  getFollowers(
    request: followGraph_pb.GetFollowersRequest,
    metadata: grpcWeb.Metadata | null): Promise<followGraph_pb.GetFollowersResponse>;

  getFollowers(
    request: followGraph_pb.GetFollowersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: followGraph_pb.GetFollowersResponse) => void): grpcWeb.ClientReadableStream<followGraph_pb.GetFollowersResponse>;

  getFollowers(
    request: followGraph_pb.GetFollowersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: followGraph_pb.GetFollowersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.FollowGraph/GetFollowers',
        request,
        metadata || {},
        this.methodDescriptorGetFollowers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.FollowGraph/GetFollowers',
    request,
    metadata || {},
    this.methodDescriptorGetFollowers);
  }

  methodDescriptorGetFollowing = new grpcWeb.MethodDescriptor(
    '/social.FollowGraph/GetFollowing',
    grpcWeb.MethodType.UNARY,
    followGraph_pb.GetFollowingRequest,
    followGraph_pb.GetFollowingResponse,
    (request: followGraph_pb.GetFollowingRequest) => {
      return request.serializeBinary();
    },
    followGraph_pb.GetFollowingResponse.deserializeBinary
  );

  getFollowing(
    request: followGraph_pb.GetFollowingRequest,
    metadata: grpcWeb.Metadata | null): Promise<followGraph_pb.GetFollowingResponse>;

  getFollowing(
    request: followGraph_pb.GetFollowingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: followGraph_pb.GetFollowingResponse) => void): grpcWeb.ClientReadableStream<followGraph_pb.GetFollowingResponse>;

  getFollowing(
    request: followGraph_pb.GetFollowingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: followGraph_pb.GetFollowingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.FollowGraph/GetFollowing',
        request,
        metadata || {},
        this.methodDescriptorGetFollowing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.FollowGraph/GetFollowing',
    request,
    metadata || {},
    this.methodDescriptorGetFollowing);
  }

  methodDescriptorIsFollowing = new grpcWeb.MethodDescriptor(
    '/social.FollowGraph/IsFollowing',
    grpcWeb.MethodType.UNARY,
    followGraph_pb.IsFollowingRequest,
    followGraph_pb.IsFollowingResponse,
    (request: followGraph_pb.IsFollowingRequest) => {
      return request.serializeBinary();
    },
    followGraph_pb.IsFollowingResponse.deserializeBinary
  );

  isFollowing(
    request: followGraph_pb.IsFollowingRequest,
    metadata: grpcWeb.Metadata | null): Promise<followGraph_pb.IsFollowingResponse>;

  isFollowing(
    request: followGraph_pb.IsFollowingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: followGraph_pb.IsFollowingResponse) => void): grpcWeb.ClientReadableStream<followGraph_pb.IsFollowingResponse>;

  isFollowing(
    request: followGraph_pb.IsFollowingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: followGraph_pb.IsFollowingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.FollowGraph/IsFollowing',
        request,
        metadata || {},
        this.methodDescriptorIsFollowing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.FollowGraph/IsFollowing',
    request,
    metadata || {},
    this.methodDescriptorIsFollowing);
  }

}
