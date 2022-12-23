// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { loginClient, profileClient, profileMasterClient } from './auth';

const clients = {
	auth: {
		login: loginClient,
		profile: profileClient,
		profileMaster: profileMasterClient
	}
};

export default clients;