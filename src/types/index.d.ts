// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Gender } from 'src/generated/common_pb';
export interface IUserProfile {
	attributesList?: string[];
	createdOn?: number;
	domain?: string;
	email?: string;
	gender?: Gender;
	loginId?: string;
	metaData?: string;
	name?: string;
	phone?: string;
	photoUrl?: string;
	preferredLanguage?: string;
}
export interface IAuthResponse {
	jwt: string;
	profile: IUserProfile;
	userType: string;
}

export interface ILogin {
	authResponse: IAuthResponse;
	isLogin: () => boolean;
	isAdmin: () => boolean;
	logout: () => void;
    setAuthResponse: (authResponse: IAuthResponse) => void;
}

export interface IProfileMaster {
	language?: string;
	options?: string[];
	field?: string;
	type?: string;
}