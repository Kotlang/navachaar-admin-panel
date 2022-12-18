// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserProfileProto } from 'src/generated/common_pb';
import { AuthResponse } from 'src/generated/login_pb';
import { IAuthResponse, IUserProfile } from 'src/types';

const getAuthResponse: (authResponse: AuthResponse) => IAuthResponse = (authResponse) => {
	const userProfileProto = authResponse.getProfile();
	return {
		jwt: authResponse.getJwt(),
		profile: userProfileProto? getUserProfile(userProfileProto): {},
		userType: authResponse.getUsertype()
	};
};

const getUserProfile: (userProfileProto: UserProfileProto) => IUserProfile = (userProfileProto) => {
	return {
		attributesList: userProfileProto.getAttributesList(),
		createdOn: userProfileProto.getCreatedon(),
		domain: userProfileProto.getDomain(),
		email: userProfileProto.getEmail(),
		gender: userProfileProto.getGender(),
		loginId: userProfileProto.getLoginid(),
		metaData: userProfileProto.getMetadatamap(),
		name: userProfileProto.getName(),
		phone: userProfileProto.getPhone(),
		photoUrl: userProfileProto.getPhotourl(),
		preferredLanguage: userProfileProto.getPreferredlanguage()
	};
};

export { getAuthResponse, getUserProfile };