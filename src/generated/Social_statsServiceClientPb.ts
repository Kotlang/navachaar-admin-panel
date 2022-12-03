/**
 * @fileoverview gRPC-Web generated client stub for social
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.6.1
// source: social_stats.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as social_stats_pb from './social_stats_pb';


export class SocialStatsClient {
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

  methodDescriptorGetStats = new grpcWeb.MethodDescriptor(
    '/social.SocialStats/GetStats',
    grpcWeb.MethodType.UNARY,
    social_stats_pb.GetStatsRequest,
    social_stats_pb.GetStatsResponse,
    (request: social_stats_pb.GetStatsRequest) => {
      return request.serializeBinary();
    },
    social_stats_pb.GetStatsResponse.deserializeBinary
  );

  getStats(
    request: social_stats_pb.GetStatsRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_stats_pb.GetStatsResponse>;

  getStats(
    request: social_stats_pb.GetStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_stats_pb.GetStatsResponse) => void): grpcWeb.ClientReadableStream<social_stats_pb.GetStatsResponse>;

  getStats(
    request: social_stats_pb.GetStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_stats_pb.GetStatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.SocialStats/GetStats',
        request,
        metadata || {},
        this.methodDescriptorGetStats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.SocialStats/GetStats',
    request,
    metadata || {},
    this.methodDescriptorGetStats);
  }

}
