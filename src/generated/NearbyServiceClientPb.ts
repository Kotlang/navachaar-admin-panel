/**
 * @fileoverview gRPC-Web generated client stub for social
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.6.1
// source: nearby.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as nearby_pb from './nearby_pb';
import * as commons_pb from './commons_pb';


export class NearbyClient {
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

  methodDescriptorAddLocation = new grpcWeb.MethodDescriptor(
    '/social.Nearby/AddLocation',
    grpcWeb.MethodType.UNARY,
    nearby_pb.UserGpsLocation,
    commons_pb.SocialStatusResponse,
    (request: nearby_pb.UserGpsLocation) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  addLocation(
    request: nearby_pb.UserGpsLocation,
    metadata: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  addLocation(
    request: nearby_pb.UserGpsLocation,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  addLocation(
    request: nearby_pb.UserGpsLocation,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.Nearby/AddLocation',
        request,
        metadata || {},
        this.methodDescriptorAddLocation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.Nearby/AddLocation',
    request,
    metadata || {},
    this.methodDescriptorAddLocation);
  }

  methodDescriptorgetNearby = new grpcWeb.MethodDescriptor(
    '/social.Nearby/getNearby',
    grpcWeb.MethodType.UNARY,
    nearby_pb.GetNearbyRequest,
    nearby_pb.GetNearbyResponse,
    (request: nearby_pb.GetNearbyRequest) => {
      return request.serializeBinary();
    },
    nearby_pb.GetNearbyResponse.deserializeBinary
  );

  getNearby(
    request: nearby_pb.GetNearbyRequest,
    metadata: grpcWeb.Metadata | null): Promise<nearby_pb.GetNearbyResponse>;

  getNearby(
    request: nearby_pb.GetNearbyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nearby_pb.GetNearbyResponse) => void): grpcWeb.ClientReadableStream<nearby_pb.GetNearbyResponse>;

  getNearby(
    request: nearby_pb.GetNearbyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nearby_pb.GetNearbyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.Nearby/getNearby',
        request,
        metadata || {},
        this.methodDescriptorgetNearby,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.Nearby/getNearby',
    request,
    metadata || {},
    this.methodDescriptorgetNearby);
  }

}
