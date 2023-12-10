// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Metadata, RpcError } from 'grpc-web';
import { FeedFilters, FeedResponse,GetFeedRequest } from 'src/generated/social_pb';
import { UserPostClient } from 'src/generated/SocialServiceClientPb';
import { IGetFeedRequest, PostType } from 'src/types/index';

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

const getFeedRequest = ( feedRequest: IGetFeedRequest ) => {
	const getfeedRequest = new GetFeedRequest();
	if (feedRequest.filters){
		const filters = new FeedFilters();
		filters.setTag(feedRequest.filters.tag || '');
		filters.setUserid(feedRequest.filters.userId || '');
		filters.setCreatedby(feedRequest.filters.createdBy || '');
		filters.setPosttype(feedRequest.filters.postType || PostType.FEED_POST);
		filters.setContenttypeList(feedRequest.filters.contentType || []);
		filters.setTypeList(feedRequest.filters.type || []);
		filters.setFetchusercommentedposts(feedRequest.filters.fetchUserCommentedPosts || false);
		filters.setFetchuserreactedposts(feedRequest.filters.fetchUserReactedPosts || false);

		getfeedRequest.setFilters(filters);
	}

	getfeedRequest.setReferencepost(feedRequest.referencePost || '');
	getfeedRequest.setPagesize(feedRequest.pageSize || 10);
	getfeedRequest.setPagenumber(feedRequest.pageNumber || 1);

	return getfeedRequest;
};

const userPostClient = {
	FeedContent:(feedrequest: IGetFeedRequest, metaData: Metadata | null, callback: (err: RpcError, response: FeedResponse) => void) => {
		getUserPostClient().getFeed(getFeedRequest(feedrequest), metaData, callback);
	}
};

export default userPostClient;