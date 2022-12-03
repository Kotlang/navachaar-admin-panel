/**
 * @fileoverview gRPC-Web generated client stub for login
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.6.1
// source: profile-master.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as profile$master_pb from './profile-master_pb';


export class ProfileMasterClient {
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

  methodDescriptorGetProfileMaster = new grpcWeb.MethodDescriptor(
    '/login.ProfileMaster/GetProfileMaster',
    grpcWeb.MethodType.UNARY,
    profile$master_pb.GetProfileMasterRequest,
    profile$master_pb.ProfileMasterResponse,
    (request: profile$master_pb.GetProfileMasterRequest) => {
      return request.serializeBinary();
    },
    profile$master_pb.ProfileMasterResponse.deserializeBinary
  );

  getProfileMaster(
    request: profile$master_pb.GetProfileMasterRequest,
    metadata: grpcWeb.Metadata | null): Promise<profile$master_pb.ProfileMasterResponse>;

  getProfileMaster(
    request: profile$master_pb.GetProfileMasterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile$master_pb.ProfileMasterResponse) => void): grpcWeb.ClientReadableStream<profile$master_pb.ProfileMasterResponse>;

  getProfileMaster(
    request: profile$master_pb.GetProfileMasterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile$master_pb.ProfileMasterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.ProfileMaster/GetProfileMaster',
        request,
        metadata || {},
        this.methodDescriptorGetProfileMaster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.ProfileMaster/GetProfileMaster',
    request,
    metadata || {},
    this.methodDescriptorGetProfileMaster);
  }

}
