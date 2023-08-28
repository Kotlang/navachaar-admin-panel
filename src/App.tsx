// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import 'react-toastify/dist/ReactToastify.css';

import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { antdTheme } from 'src/themes/antdTheme';
import { styledTheme } from 'src/themes/styledTheme';
import { ThemeProvider } from 'styled-components';

import AppLayout from './components/AppLayout';
import Home from './Screens/Home';
import Localization from './Screens/Localization';
import Login from './Screens/Login';
import Logout from './Screens/Logout';
import NotFound from './Screens/NotFound';
import PermissionDenied from './Screens/PermissionDenied';
import Verify from './Screens/Verify';
import { GlobalStyle } from './ui-components/GlobalStyle';

function App() {
	return (
		<ConfigProvider theme={antdTheme}>
			<ThemeProvider theme={styledTheme}>
				<GlobalStyle />
				<ToastContainer />
				<BrowserRouter>
					<Routes>
						<Route element={<AppLayout />}>
							<Route path='/' element={<Home/>} />
							<Route path='/not-admin' element={<PermissionDenied/>} />
							<Route path='/localization' element={<Localization />} />
							<Route path='/logout' element={<Logout />} />
							<Route path='*' element={<NotFound />} />
						</Route>
						<Route path='/login' element={<Login />}/>
						<Route path='/verify' element={<Verify />}/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</ConfigProvider>
	);
}

export default App;
