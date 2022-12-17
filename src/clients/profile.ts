// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import {
	BulkGetProfileRequest,
	GetProfileRequest
} from 'src/generated/profile_pb';
import { ProfileClient } from 'src/generated/ProfileServiceClientPb';

const getProfileClient = (() => {
	const authURL = process.env.REACT_APP_AUTH_URL;
	let client: ProfileClient;
	if (authURL) {
		client = new ProfileClient(authURL);
	}
	return () => {
		return client;
	};
})();

const getBulkProfileRequest = () => {
	const bulkGetProfileRequest = new BulkGetProfileRequest();
	return bulkGetProfileRequest;
};
const getProfileRequest = (userId: string) => {
	const profile = new GetProfileRequest();
	console.log(userId);
	profile.setUserid(userId);
	return profile;
};

export { getProfileClient, getBulkProfileRequest, getProfileRequest };
