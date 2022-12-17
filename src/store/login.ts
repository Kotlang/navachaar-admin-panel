// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ILogin {
    authHeader: string;
    loginId: string;
    emailOrPhone: string;
    setAuthHeader: (authHeader: string) => void;
    setLoginId: (loginId: string) => void;
    setEmailOrPhone: (emailOrPhone: string) => void;
}

const useLoginStore = create<ILogin>()(
	devtools(
		persist(
			(set) => ({
				authHeader: '',
				emailOrPhone: '',
				loginId: '',
				setAuthHeader: (authHeader) => {
					set((state) => {
						return { ...state, authHeader };
					});
				},
				setEmailOrPhone: (emailOrPhone) => {
					set((state) => {
						return { ...state, emailOrPhone };
					});
				},
				setLoginId: (loginId) => {
					set((state) => {
						return { ...state, loginId };
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