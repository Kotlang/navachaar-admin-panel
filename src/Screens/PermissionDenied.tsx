// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';

const PermissionDenied = () => {
	return (
		<section className='min-h-screen min-w-screen flex flex-col items-center justify-center'>
			<h1 className='text-4xl font-bold'>Permission Denied</h1>
			<p className='mt-2 text-xl text-red-500'>Only <span className='font-bold text-2xl'>@admin</span> can access the Admin Portal</p>
		</section>
	);
};

export default PermissionDenied;