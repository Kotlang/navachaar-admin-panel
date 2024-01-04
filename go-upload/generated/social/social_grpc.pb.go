// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.25.1
// source: social.proto

package generated

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// UserPostClient is the client API for UserPost service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UserPostClient interface {
	// create new post or reply to a post or add answer to a post
	CreatePost(ctx context.Context, in *UserPostRequest, opts ...grpc.CallOption) (*UserPostProto, error)
	DeletePost(ctx context.Context, in *DeletePostRequest, opts ...grpc.CallOption) (*SocialStatusResponse, error)
	GetFeed(ctx context.Context, in *GetFeedRequest, opts ...grpc.CallOption) (*FeedResponse, error)
	GetMediaUploadUrl(ctx context.Context, in *MediaUploadRequest, opts ...grpc.CallOption) (*MediaUploadURL, error)
	// Returns post with it's text, media, webPreviews, tags, etc.
	GetPost(ctx context.Context, in *GetPostRequest, opts ...grpc.CallOption) (*UserPostProto, error)
	GetBookmarks(ctx context.Context, in *GetBookmarksRequest, opts ...grpc.CallOption) (*FeedResponse, error)
	GetTags(ctx context.Context, in *GetTagsRequest, opts ...grpc.CallOption) (*TagListResponse, error)
	// directly takes input of post image or video and uploads the media.
	UploadPostMedia(ctx context.Context, opts ...grpc.CallOption) (UserPost_UploadPostMediaClient, error)
	// Called from frontend before CreatePost.
	// Will be usually called whenever a user pastes a link in post - To show preview as user is creating post.
	// Also, before createPost - Idempotency.
	ParsePost(ctx context.Context, in *UserPostRequest, opts ...grpc.CallOption) (*UserPostRequest, error)
}

type userPostClient struct {
	cc grpc.ClientConnInterface
}

func NewUserPostClient(cc grpc.ClientConnInterface) UserPostClient {
	return &userPostClient{cc}
}

func (c *userPostClient) CreatePost(ctx context.Context, in *UserPostRequest, opts ...grpc.CallOption) (*UserPostProto, error) {
	out := new(UserPostProto)
	err := c.cc.Invoke(ctx, "/social.UserPost/CreatePost", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userPostClient) DeletePost(ctx context.Context, in *DeletePostRequest, opts ...grpc.CallOption) (*SocialStatusResponse, error) {
	out := new(SocialStatusResponse)
	err := c.cc.Invoke(ctx, "/social.UserPost/DeletePost", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userPostClient) GetFeed(ctx context.Context, in *GetFeedRequest, opts ...grpc.CallOption) (*FeedResponse, error) {
	out := new(FeedResponse)
	err := c.cc.Invoke(ctx, "/social.UserPost/GetFeed", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userPostClient) GetMediaUploadUrl(ctx context.Context, in *MediaUploadRequest, opts ...grpc.CallOption) (*MediaUploadURL, error) {
	out := new(MediaUploadURL)
	err := c.cc.Invoke(ctx, "/social.UserPost/GetMediaUploadUrl", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userPostClient) GetPost(ctx context.Context, in *GetPostRequest, opts ...grpc.CallOption) (*UserPostProto, error) {
	out := new(UserPostProto)
	err := c.cc.Invoke(ctx, "/social.UserPost/GetPost", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userPostClient) GetBookmarks(ctx context.Context, in *GetBookmarksRequest, opts ...grpc.CallOption) (*FeedResponse, error) {
	out := new(FeedResponse)
	err := c.cc.Invoke(ctx, "/social.UserPost/GetBookmarks", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userPostClient) GetTags(ctx context.Context, in *GetTagsRequest, opts ...grpc.CallOption) (*TagListResponse, error) {
	out := new(TagListResponse)
	err := c.cc.Invoke(ctx, "/social.UserPost/GetTags", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userPostClient) UploadPostMedia(ctx context.Context, opts ...grpc.CallOption) (UserPost_UploadPostMediaClient, error) {
	stream, err := c.cc.NewStream(ctx, &UserPost_ServiceDesc.Streams[0], "/social.UserPost/UploadPostMedia", opts...)
	if err != nil {
		return nil, err
	}
	x := &userPostUploadPostMediaClient{stream}
	return x, nil
}

type UserPost_UploadPostMediaClient interface {
	Send(*UploadPostMediaRequest) error
	CloseAndRecv() (*UploadPostMediaResponse, error)
	grpc.ClientStream
}

type userPostUploadPostMediaClient struct {
	grpc.ClientStream
}

func (x *userPostUploadPostMediaClient) Send(m *UploadPostMediaRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *userPostUploadPostMediaClient) CloseAndRecv() (*UploadPostMediaResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(UploadPostMediaResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *userPostClient) ParsePost(ctx context.Context, in *UserPostRequest, opts ...grpc.CallOption) (*UserPostRequest, error) {
	out := new(UserPostRequest)
	err := c.cc.Invoke(ctx, "/social.UserPost/ParsePost", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserPostServer is the server API for UserPost service.
// All implementations must embed UnimplementedUserPostServer
// for forward compatibility
type UserPostServer interface {
	// create new post or reply to a post or add answer to a post
	CreatePost(context.Context, *UserPostRequest) (*UserPostProto, error)
	DeletePost(context.Context, *DeletePostRequest) (*SocialStatusResponse, error)
	GetFeed(context.Context, *GetFeedRequest) (*FeedResponse, error)
	GetMediaUploadUrl(context.Context, *MediaUploadRequest) (*MediaUploadURL, error)
	// Returns post with it's text, media, webPreviews, tags, etc.
	GetPost(context.Context, *GetPostRequest) (*UserPostProto, error)
	GetBookmarks(context.Context, *GetBookmarksRequest) (*FeedResponse, error)
	GetTags(context.Context, *GetTagsRequest) (*TagListResponse, error)
	// directly takes input of post image or video and uploads the media.
	UploadPostMedia(UserPost_UploadPostMediaServer) error
	// Called from frontend before CreatePost.
	// Will be usually called whenever a user pastes a link in post - To show preview as user is creating post.
	// Also, before createPost - Idempotency.
	ParsePost(context.Context, *UserPostRequest) (*UserPostRequest, error)
	mustEmbedUnimplementedUserPostServer()
}

// UnimplementedUserPostServer must be embedded to have forward compatible implementations.
type UnimplementedUserPostServer struct {
}

func (UnimplementedUserPostServer) CreatePost(context.Context, *UserPostRequest) (*UserPostProto, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePost not implemented")
}
func (UnimplementedUserPostServer) DeletePost(context.Context, *DeletePostRequest) (*SocialStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePost not implemented")
}
func (UnimplementedUserPostServer) GetFeed(context.Context, *GetFeedRequest) (*FeedResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFeed not implemented")
}
func (UnimplementedUserPostServer) GetMediaUploadUrl(context.Context, *MediaUploadRequest) (*MediaUploadURL, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMediaUploadUrl not implemented")
}
func (UnimplementedUserPostServer) GetPost(context.Context, *GetPostRequest) (*UserPostProto, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPost not implemented")
}
func (UnimplementedUserPostServer) GetBookmarks(context.Context, *GetBookmarksRequest) (*FeedResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBookmarks not implemented")
}
func (UnimplementedUserPostServer) GetTags(context.Context, *GetTagsRequest) (*TagListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTags not implemented")
}
func (UnimplementedUserPostServer) UploadPostMedia(UserPost_UploadPostMediaServer) error {
	return status.Errorf(codes.Unimplemented, "method UploadPostMedia not implemented")
}
func (UnimplementedUserPostServer) ParsePost(context.Context, *UserPostRequest) (*UserPostRequest, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ParsePost not implemented")
}
func (UnimplementedUserPostServer) mustEmbedUnimplementedUserPostServer() {}

// UnsafeUserPostServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UserPostServer will
// result in compilation errors.
type UnsafeUserPostServer interface {
	mustEmbedUnimplementedUserPostServer()
}

func RegisterUserPostServer(s grpc.ServiceRegistrar, srv UserPostServer) {
	s.RegisterService(&UserPost_ServiceDesc, srv)
}

func _UserPost_CreatePost_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserPostRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).CreatePost(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/CreatePost",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).CreatePost(ctx, req.(*UserPostRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserPost_DeletePost_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePostRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).DeletePost(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/DeletePost",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).DeletePost(ctx, req.(*DeletePostRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserPost_GetFeed_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFeedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).GetFeed(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/GetFeed",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).GetFeed(ctx, req.(*GetFeedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserPost_GetMediaUploadUrl_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MediaUploadRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).GetMediaUploadUrl(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/GetMediaUploadUrl",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).GetMediaUploadUrl(ctx, req.(*MediaUploadRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserPost_GetPost_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPostRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).GetPost(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/GetPost",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).GetPost(ctx, req.(*GetPostRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserPost_GetBookmarks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBookmarksRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).GetBookmarks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/GetBookmarks",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).GetBookmarks(ctx, req.(*GetBookmarksRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserPost_GetTags_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTagsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).GetTags(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/GetTags",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).GetTags(ctx, req.(*GetTagsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserPost_UploadPostMedia_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(UserPostServer).UploadPostMedia(&userPostUploadPostMediaServer{stream})
}

type UserPost_UploadPostMediaServer interface {
	SendAndClose(*UploadPostMediaResponse) error
	Recv() (*UploadPostMediaRequest, error)
	grpc.ServerStream
}

type userPostUploadPostMediaServer struct {
	grpc.ServerStream
}

func (x *userPostUploadPostMediaServer) SendAndClose(m *UploadPostMediaResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *userPostUploadPostMediaServer) Recv() (*UploadPostMediaRequest, error) {
	m := new(UploadPostMediaRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _UserPost_ParsePost_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserPostRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserPostServer).ParsePost(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/social.UserPost/ParsePost",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserPostServer).ParsePost(ctx, req.(*UserPostRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// UserPost_ServiceDesc is the grpc.ServiceDesc for UserPost service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UserPost_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "social.UserPost",
	HandlerType: (*UserPostServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePost",
			Handler:    _UserPost_CreatePost_Handler,
		},
		{
			MethodName: "DeletePost",
			Handler:    _UserPost_DeletePost_Handler,
		},
		{
			MethodName: "GetFeed",
			Handler:    _UserPost_GetFeed_Handler,
		},
		{
			MethodName: "GetMediaUploadUrl",
			Handler:    _UserPost_GetMediaUploadUrl_Handler,
		},
		{
			MethodName: "GetPost",
			Handler:    _UserPost_GetPost_Handler,
		},
		{
			MethodName: "GetBookmarks",
			Handler:    _UserPost_GetBookmarks_Handler,
		},
		{
			MethodName: "GetTags",
			Handler:    _UserPost_GetTags_Handler,
		},
		{
			MethodName: "ParsePost",
			Handler:    _UserPost_ParsePost_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "UploadPostMedia",
			Handler:       _UserPost_UploadPostMedia_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "social.proto",
}