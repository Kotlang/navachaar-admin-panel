// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';
import { RouteObject } from 'react-router-dom';

import Error from './Error';
import Login from './Login';
import Root from './Root';
import Verify from './Verify';

export const routes: RouteObject[] = [
	{
		children: [
			{
				element: <Login />,
				path: '/login'
			},
			{
				element: <Verify />,
				path: '/verify'
			}
		],
		element: <Root/>,
		errorElement: <Error />,
		path: '/'
	}
];