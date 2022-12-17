// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface IAuthResponse {
	jwt: string;
	profile: {
		attributesList?: string[];
		createdOn?: number;
		domain?: string;
		email?: string;
		gender?: string;
		loginId?: string;
		metaData?: string;
		name?: string;
		phone?: string;
		photoUrl?: string;
		preferredLanguage?: string;
	}
	userType: string;
}

interface ILogin {
	authResponse: IAuthResponse;
	isLogin: () => boolean;
	isAdmin: () => boolean;
    setAuthResponse: (authResponse: IAuthResponse) => void;
    setEmailOrPhone: (emailOrPhone: string) => void;
}

const useLoginStore = create<ILogin>()(
	devtools(
		persist(
			(set, get) => ({
				authResponse: {
					jwt: '',
					profile: {},
					userType: ''
				},
				isAdmin: () => {
					return get().authResponse.userType === 'admin';
				},
				isLogin: () => {
					return get().authResponse.jwt.trim().length > 0;
				},
				setAuthResponse: (authResponse) => {
					set((state) => {
						return { ...state, authResponse };
					});
				},
				setEmailOrPhone: (emailOrPhone) => {
					set((state) => {
						return { ...state, authResponse: {
							...state.authResponse,
							profile: {
								...state.authResponse?.profile,
								phone: emailOrPhone
							}
						} };
					});
				}
			}),
			{
				name: 'login'
			}
		)
	)
);

export default useLoginStore;