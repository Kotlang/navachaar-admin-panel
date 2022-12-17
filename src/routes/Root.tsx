// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getProfileClient, getProfileRequest } from 'src/clients/profile';
import { useLoginStore } from 'src/store';

const Root = () => {
	const navigate = useNavigate();
	const { authHeader, loginId } = useLoginStore(({ authHeader, loginId }) => ({
		authHeader,
		loginId
	}));
	useEffect(() => {
		if (!authHeader) {
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authHeader]);

	useEffect(() => {
		const client = getProfileClient();
		client.getProfileById(
			getProfileRequest(loginId),
			{
				Authorization: `bearer ${authHeader}`
			},
			(err, res) => {
				console.log({ err, res });
			}
		);
	}, [loginId, authHeader]);

	return (
		<>
			<ToastContainer />
			<Outlet />
		</>
	);
};

export default Root;
