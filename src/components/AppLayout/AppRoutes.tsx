// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'src/Screens/Home';
import Localization from 'src/Screens/Localization';
import Logout from 'src/Screens/Logout';
import PermissionDenied from 'src/Screens/PermissionDenied';

const AppRoutes = () => {
	return (
		<>
			<Route path='/' element={<Home/>} />
			<Route path='/not-admin' element={<PermissionDenied/>} />
			<Route path='/localization' element={<Localization />} />
			<Route path='/logout' element={<Logout />} />
		</>
	);
};

export default AppRoutes;