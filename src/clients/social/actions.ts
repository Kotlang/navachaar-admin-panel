// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Metadata, RpcError } from 'grpc-web';
import { CommentFetchRequest, CommentsFetchResponse } from 'src/generated/actions_pb';
import { actionsClient } from 'src/generated/ActionsServiceClientPb';

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

const getCommentFetchRequest = (pageSize: number, pageNumber: number, parentID: string) => {
	const commentReq = new CommentFetchRequest();
	commentReq.setPagenumber(pageNumber);
	commentReq.setParentid(parentID);
	commentReq.setPagesize(pageSize);

	return commentReq;
};

const ActionsClient = {
	FetchComments: (
		pageSize: number,
		pageNumber: number,
		parentID: string,
		metaData: Metadata | null,
		callback: (err: RpcError, response: CommentsFetchResponse) => void
	) => {
		getActionsClient().fetchComments(getCommentFetchRequest(pageSize, pageNumber, parentID), addJwtToken(metaData), callback);
	}
};

export default ActionsClient;