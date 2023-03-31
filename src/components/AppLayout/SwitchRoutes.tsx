// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'src/Screens/Home';
import Localization from 'src/Screens/Localization';
import Login from 'src/Screens/Login';
import Logout from 'src/Screens/Logout';
import NotFound from 'src/Screens/NotFound';
import PermissionDenied from 'src/Screens/PermissionDenied';
import Verify from 'src/Screens/Verify';

const SwitchRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/login' element={<Login/>} />
			<Route path='/verify' element={<Verify/>} />
			<Route path='/not-admin' element={<PermissionDenied/>} />
			<Route path='/logout' element={<Logout />} />
			<Route path='/localization' element={<Localization />} />
			<Route path='*' element={<NotFound/>} />
		</Routes>
	);
};

export default SwitchRoutes;