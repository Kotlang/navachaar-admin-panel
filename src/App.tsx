// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import 'react-toastify/dist/ReactToastify.css';

import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { antdTheme } from 'src/themes/antdTheme';
import { styledTheme } from 'src/themes/styledTheme';
import { ThemeProvider } from 'styled-components';

import AppLayout from './components/AppLayout';
import { GlobalStyle } from './ui-components/GlobalStyle';

function App() {
	return (
		<BrowserRouter>
			<ConfigProvider theme={antdTheme}>
				<ThemeProvider theme={styledTheme}>
					<GlobalStyle />
					<ToastContainer />
					<AppLayout />
				</ThemeProvider>
			</ConfigProvider>
		</BrowserRouter>
	);
}

export default App;
