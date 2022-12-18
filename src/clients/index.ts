// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import loginClient from './login';
import profileClient from './profile';

const clients = {
	auth: {
		login: loginClient,
		profile: profileClient
	}
};

export default clients;