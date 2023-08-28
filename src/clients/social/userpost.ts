// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata, RpcError } from 'grpc-web';
import { Location,SocialEventMetadata } from 'src/generated/postMetadata_pb';
import { UserPostProto, UserPostRequest } from 'src/generated/social_pb';
import { UserPostClient } from 'src/generated/SocialServiceClientPb';
import { IUserPost } from 'src/types';

import { addJwtToken } from '../utils';

const getUserPostClient = (() => {
	const socialURL = process.env.REACT_APP_SOCIAL_URL;
	let client: UserPostClient;
	if (socialURL) {
		client = new UserPostClient(socialURL);
	}
	return () => {
		return client;
	};
})();

const getUserPostRequest = (userPost: IUserPost) => {
	const userPostRequest = new UserPostRequest();
	userPostRequest.setPost(userPost.post || '');
	userPostRequest.setTagsList(userPost.tags || []);
	userPostRequest.setTitle(userPost.title || '');
	userPostRequest.setPosttype(userPost.postType);

	if (userPost.socialEventMetadata) {
		const { socialEventMetadata } = userPost;
		const socialEvent = new SocialEventMetadata();
		socialEvent.setName(socialEventMetadata.name || '');
		socialEvent.setType(socialEventMetadata.type);
		if (typeof socialEventMetadata?.endAt?.unix === 'function') {
			socialEvent.setEndat(socialEventMetadata?.endAt?.unix());
		}
		if (typeof socialEventMetadata?.startAt?.unix === 'function') {
			socialEvent.setStartat(socialEventMetadata?.startAt?.unix());
		}
		socialEvent.setDescription(socialEventMetadata?.description || '');

		if (socialEventMetadata.location) {
			const { location } = socialEventMetadata;
			const loc = new Location();
			loc.setLat(location?.lat || 0);
			loc.setLong(location?.long || 0);
			socialEvent.setLocation(loc);
		}
		socialEvent.setOnlinelink(socialEventMetadata?.onlineLink || '');
		userPostRequest.setSocialeventmetadata(socialEvent);
	}

	return userPostRequest;
};

const userPostClient = {
	CreatePost: (userPost: IUserPost, metaData: Metadata | null, callback: (err: RpcError, response: UserPostProto) => void) => {
		getUserPostClient().createPost(getUserPostRequest(userPost), addJwtToken(metaData), callback);
	}
};

export default userPostClient;