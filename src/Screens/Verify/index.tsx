// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Button } from 'antd';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { getLoginClient, getVerifyRequest } from 'src/clients/login';
import { useLoginStore } from 'src/store';
import { IAuthResponse } from 'src/store/login';

const Verify = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState('');
	const [loading, setLoading] = useState(false);
	const { authResponse, setAuthResponse } = useLoginStore(({ authResponse, setAuthResponse }) => ({
		authResponse,
		setAuthResponse
	}));
	const emailOrPhone = authResponse?.profile?.phone || authResponse?.profile?.email;
	return (
		<section className='flex flex-col gap-y-5 items-center justify-center min-h-screen'>
			<div className='flex flex-col gap-y-2 -mt-20'>
				<h2 className='text-lg md:text-2xl font-medium text-gray-600'>
          Enter OTP
				</h2>
				<OtpInput
					value={otp}
					onChange={(otp: any) => setOtp(otp)}
					numInputs={6}
					separator={<span style={{ width: '8px' }}></span>}
					isInputNum={true}
					shouldAutoFocus={true}
					containerStyle='bg-gray-200 p-5 rounded-md'
					inputStyle={{
						border: '1px solid transparent',
						borderRadius: '8px',
						caretColor: 'blue',
						color: '#000',
						fontSize: '16px',
						fontWeight: '400',
						height: '54px',
						width: '54px'
					}}
					focusStyle={{
						border: '1px solid #CFD3DB',
						color: '#000',
						outline: 'none'
					}}
				/>
			</div>
			<div className="flex justify-center items-center gap-x-5">
				<Button
					htmlType="button"
					size="large"
					className="w-36 rounded-md outline-none border-none bg-black text-white hover:text-white"
					onClick={() => {
						navigate(-1);
					}}
				>
					Back
				</Button>
				<Button
					loading={loading}
					htmlType="button"
					size="large"
					className="w-36 rounded-md outline-none border-none bg-black text-white hover:text-white"
					onClick={() => {
						setLoading(true);
						const loginClient = getLoginClient();
						loginClient.verify(getVerifyRequest(emailOrPhone || '', otp), {}, (err, response) => {
							if (err) {
								console.error(err);
							} else {
								setLoading(false);
								const authResponse: IAuthResponse = {
									jwt: response.getJwt(),
									profile: {
										attributesList: response.getProfile()?.getAttributesList(),
										createdOn: response.getProfile()?.getCreatedon(),
										domain: response.getProfile()?.getDomain(),
										email: response.getProfile()?.getEmail(),
										gender: response.getProfile()?.getGender(),
										loginId: response.getProfile()?.getLoginid(),
										metaData: response.getProfile()?.getMetadatamap(),
										name: response.getProfile()?.getName(),
										phone: response.getProfile()?.getPhone(),
										photoUrl: response.getProfile()?.getPhotourl(),
										preferredLanguage: response.getProfile()?.getPreferredlanguage()
									},
									userType: response.getUsertype()
								};
								setAuthResponse(authResponse);
								const userType = response.getUsertype();
								if (userType === 'admin') {
									navigate('/');
								} else {
									navigate('/not-admin');
								}
							}
						});
					}}
				>
            Verify
				</Button>
			</div>
		</section>
	);
};

export default Verify;