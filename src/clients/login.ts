// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { LoginRequest, VerifyRequest } from '../generated/login_pb';
import { LoginClient } from '../generated/LoginServiceClientPb';

const getLoginClient = (() => {
	const authURL = process.env.REACT_APP_AUTH_URL;
	let client: LoginClient;
	if (authURL) {
		client = new LoginClient(authURL);
	}
	return () => {
		return client;
	};
})();

const getLoginRequest = (emailOrPhone: string) => {
	const loginRequest = new LoginRequest();
	const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
	if (authDomain) {
		loginRequest.setDomain(authDomain);
	}
	loginRequest.setEmailorphone(emailOrPhone);
	return loginRequest;
};

const getVerifyRequest = (emailOrPhone: string, otp: string) => {
	const verifyRequest = new VerifyRequest();
	const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
	if (authDomain) {
		verifyRequest.setDomain(authDomain);
	}
	verifyRequest.setEmailorphone(emailOrPhone);
	verifyRequest.setOtp(otp);
	return verifyRequest;
};

export { getLoginClient, getLoginRequest, getVerifyRequest };
