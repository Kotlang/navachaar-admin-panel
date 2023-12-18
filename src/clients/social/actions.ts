// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Metadata, RpcError } from 'grpc-web';
import { CommentFetchRequest, CommentsFetchResponse, IdRequest } from 'src/generated/actions_pb';
import { actionsClient } from 'src/generated/ActionsServiceClientPb';
import { SocialStatusResponse } from 'src/generated/commons_pb';

import { addJwtToken } from '../utils';

export const getActionsClient = (() => {
	const socialURL = process.env.REACT_APP_SOCIAL_URL;
	let client: actionsClient;
	if (socialURL) {
		client = new actionsClient(socialURL);
	}
	return () => {
		return client;
	};
})();

const getDeleteCommentRequest = (commentId: string) => {
	const deleteRequest = new IdRequest();
	deleteRequest.setId(commentId);

	return deleteRequest;
};

const getCommentFetchRequest = (parentID: string) => {
	const commentReq = new CommentFetchRequest();
	commentReq.setParentid(parentID);

	return commentReq;
};

const ActionsClient = {
	DeleteComments: (
		parentID: string,
		metaData: Metadata | null,
		callback: (err: RpcError, response: SocialStatusResponse) => void
	) => {
		getActionsClient().deleteComment(getDeleteCommentRequest(parentID), addJwtToken(metaData), callback);
	},

	FetchComments: (
		parentID: string,
		metaData: Metadata | null,
		callback: (err: RpcError, response: CommentsFetchResponse) => void
	) => {
		getActionsClient().fetchComments(getCommentFetchRequest(parentID), addJwtToken(metaData), callback);
	}

};

export default ActionsClient;