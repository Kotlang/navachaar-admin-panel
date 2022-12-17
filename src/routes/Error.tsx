// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
	const err: any = useRouteError();
	console.error(err);
	return (
		<section
			className='flex min-h-screen w-full justify-center items-center'
		>
			<div className='flex flex-col gap-y-2 -mt-20'>
				<h1 className='text-2xl md:text-4xl'>Oops!</h1>
				<p className='text-lg md:text-xl text-red-500 '>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{err.statusText || err.message}</i>
				</p>
			</div>
		</section>
	);
};

export default Error;