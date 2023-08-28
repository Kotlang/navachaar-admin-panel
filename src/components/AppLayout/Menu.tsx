// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { FC } from 'react';
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
		title: 'Events'
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
	return (
		<div className={className}>
			<section>
				<Link to='/'>
					<p className='flex items-center gap-x-2 overflow-hidden h-[75px] justify-center'>
						<NavaCharIcon className='text-5xl'/>
					</p>
				</Link>
			</section>
			<section className='mt-3'>
				<h2 className='px-6 flex items-center gap-x-2'>
					<span className='font-bold text-lg'>Menu</span>
				</h2>
				<ul className='flex flex-col py-2'>
					{
						menuItems.map((item) => {
							return <li className='w-full pr-5' key={item.key}>
								<Link className='flex items-center gap-x-3 menu-item-active' to={item.key} >
									<p className='w-[5px] h-9'></p>
									<p className='px-3 py-2.5 font-bold text-base text-blue_secondary flex items-center gap-x-2 flex-1 rounded-md'>
										{item.title}
									</p>
								</Link>
							</li>;
						})
					}
				</ul>
			</section>
		</div>
	);
};

export default styled(Menu)`
    background-color: white;
    .menu-item-active:focus {
        p:first-child {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            background-color: #645ADF !important;
        }
        p:last-child {
            background-color: #FBFAFC !important;
            box-shadow: -2px 3px 6px #CAC9F9;
            color: #645ADF !important;
            span {
                color: #645ADF !important;
            }
        }
    }
`;