// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavaCharIcon } from 'src/ui-components/CustomIcons';
import styled from 'styled-components';
const menuItems = [
	{
		key: '/',
		title: 'Home'
	},
	{
		key: '/events',
		subMenu: [
			{
				key: '/events/create',
				title: 'Create'
			},
			{
				key: '/events/show',
				title: 'Show'
			}
		],
		title: 'Events'
	},
	{
		key: '/content',
		title: 'Posts'
	},
	{
		key: '/users',
		title: 'Users'
	},
	{
		key: '/profile-master',
		title: 'Profile Master'
	},
	{
		key: '/settings',
		title: 'Settings'
	},
	{
		key: '/localization',
		title: 'Localization'
	},
	{
		key: '/logout',
		title: 'Logout'
	}
];

interface Props {
	className?: string;
}

const Menu: FC<Props> = ({ className }) => {
	const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

	const handleSubMenuClick = (key: string) => {
		setExpandedSubMenu((prevKey) => (prevKey === key ? null : key));
	};
	return (
		<div className={className}>
			<section>
				<Link to='/'>
					<p className='flex items-center gap-x-2 overflow-hidden h-[75px] justify-center'>
						<NavaCharIcon className='text-6xl' />
					</p>
				</Link>
			</section>
			<section className='mt-3'>
				<h2 className='px-6 flex items-center gap-x-2'>
					<span className='font-bold text-lg'>Menu</span>
				</h2>
				<ul className='flex flex-col py-2'>
					{menuItems.map((item) => (
						<li className='w-full pr-5' key={item.key}>
							{item.subMenu ? (
								<>
									<div
										className='flex items-center gap-x-3 menu-item-active'
										onClick={() => handleSubMenuClick(item.key)}
									>
										<p className='w-[5px] h-9'></p>
										<button className='px-3 py-2.5 font-bold text-base text-white flex items-center gap-x-2 flex-1 rounded-md'>
											{item.title}
										</button>
									</div>
									{expandedSubMenu === item.key && (
										<ul className={'sublist-bg'}>
											{item.subMenu.map((subItem) => (
												<li key={subItem.key} className='py-1'>
													<Link
														className='flex items-center gap-x-3 menu-item-active'
														to={subItem.key}
													>
														<p className='w-[5px] h-9'></p>
														<p className='px-8 py-2.5 font-bold text-base text-white flex items-center gap-x-2 flex-1 rounded-md'>
															{subItem.title}
														</p>
													</Link>
												</li>
											))}
										</ul>
									)}
								</>
							) : (
								<Link
									className='flex items-center gap-x-3 menu-item-active'
									to={item.key}
								>
									<p className='w-[5px] h-9'></p>
									<p className='px-3 py-2.5 font-bold text-base text-white flex items-center gap-x-2 flex-1 rounded-md'>
										{item.title}
									</p>
								</Link>
							)}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default styled(Menu)`
  height: 100vh;
  background-color: #fbbf24;
  .menu-item-active:focus {
    p:first-child {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      background-color: #f97316 !important;
    }
    p:last-child {
      background-color: #fef3c7 !important;
      box-shadow: -2px 3px 6px #cac9f9;
      color: #f97316 !important;
      span {
        color: #f97316 !important;
      }
    }
  }
`;
