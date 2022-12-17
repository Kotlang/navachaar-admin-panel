// Copyright 2022-2023 @Kotlang/navachar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Button } from 'antd';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { getLoginClient, getVerifyRequest } from 'src/clients/login';
import { useLoginStore } from 'src/store';

const Verify = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState('');
	const [loading, setLoading] = useState(false);
	const { emailOrPhone, setAuthHeader, setLoginId } = useLoginStore(({ emailOrPhone, setAuthHeader, setLoginId }) => ({
		emailOrPhone,
		setAuthHeader,
		setLoginId
	}));
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
			<div className="flex justify-center items-center">
				<Button
					loading={loading}
					htmlType="button"
					size="large"
					className="w-36 rounded-md outline-none border-none bg-black text-white hover:text-white"
					onClick={() => {
						setLoading(true);
						const loginClient = getLoginClient();
						loginClient.verify(getVerifyRequest(emailOrPhone, otp), {}, (err, response) => {
							if (err) {
								console.error(err);
							} else {
								setLoading(false);
								setAuthHeader(response.getJwt());
								setLoginId(response.getProfile()?.getLoginid() || '');
								navigate('/');
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