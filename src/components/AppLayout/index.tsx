// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Drawer, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from 'src/store';
import styled from 'styled-components';

import Footer from './Footer';
import Menu from './Menu';
import NavHeader from './NavHeader';
import SwitchRoutes from './SwitchRoutes';

const { Content, Sider } = Layout;

const AppLayout = ({ className }: { className?: string }) => {
	const [sideDrawer, setSideDrawer] = useState(false);

	const navigate = useNavigate();
	const { authResponse, isAdmin, isLogin } = useLoginStore(({ authResponse, isAdmin, isLogin }) => ({
		authResponse,
		isAdmin,
		isLogin
	}));

	useEffect(() => {
		if (!isLogin()) {
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authResponse?.jwt]);

	return (
		<Layout className={className}>
			{isAdmin() && isLogin() ? <>
				<NavHeader setSideDrawer={setSideDrawer} sideDrawer={sideDrawer} />
				<Layout hasSider className='relative'>
					<Sider
						trigger={null}
						collapsible={false}
						collapsed={false}
						className={'hidden overflow-y-hidden sidebar bg-white lg:block top-0 bottom-0 left-0 h-screen z-100 w-full max-w-[200px] sider-shadow'}
						style={{
							position: 'fixed'
						}}
					>
						<Menu />
					</Sider>
					<Drawer
						placement='left'
						closable={false}
						onClose={() => setSideDrawer(false)}
						open={sideDrawer}
						getContainer={false}
						className='w-full max-w-[200px] p-0'
					>
						<Menu />
					</Drawer>
					<Layout className='min-h flex flex-row p-0'>
						<div className='hidden lg:block w-full max-w-[200px]'></div>
						<Content className='bg-purple_app_bg p-8'>
							<SwitchRoutes/>
						</Content>
					</Layout>
				</Layout>
				<Footer/>
			</>: <SwitchRoutes />}
		</Layout>
	);
};

export default styled(AppLayout)`
    background: transparent !important;
	.min-h {
		min-height: calc(100vh - 120px);
	}
	.sider-shadow {
		box-shadow: -2px 4px 4px rgba(63, 102, 153, 0.5);
	}
	.ant-drawer-content-wrapper {
		max-width: 200px;
	}
	.ant-drawer-mask {

	}
	.ant-layout-sider {
		background-color: white !important;
	}
	.ant-drawer-body {
		padding: 0;
		margin: 0;
	}
`;