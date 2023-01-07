// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clients from 'src/clients';
import { useLoginStore } from 'src/store';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { authResponse } = useLoginStore(({ authResponse }) => ({
		authResponse
	}));
	const getOTP = (values: any) => {
		if (values.emailOrPhone) {
			setLoading(true);
			clients.auth.login.Login(values.emailOrPhone, {}, (err) => {
				if (err) {
					console.error(err);
				} else {
					setLoading(false);
					navigate('/verify', {
						state: {
							emailOrPhone: values.emailOrPhone
						}
					});
				}
			});
		}
	};
	useEffect(() => {
		if (authResponse?.jwt && authResponse?.jwt.trim().length > 0) {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authResponse?.jwt]);
	return (
		<section className='flex items-center justify-center min-h-screen'>
			<Form
				className='-mt-10'
				onFinish={getOTP}
			>
				<div
					className='flex flex-col gap-y-2'
				>
					<label htmlFor="emailOrPhone" className='block'>
						<p className='text-xl font-medium'>
							Please enter a phone number
						</p>
					</label>
					<Form.Item
						name='emailOrPhone'
						rules={
							[
								{
									message: 'Phone number is required.',
									required: true
								},
								{
									message: 'Please enter valid phone number.',
									pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
								}
							]
						}
					>
						<Input className='rounded-md py-2 px-3 md:min-w-[400px] text-lg' id='emailOrPhone' placeholder='Enter a phone number' />
					</Form.Item>
				</div>
				<div className="flex justify-center items-center">
					<Button
						loading={loading}
						htmlType="submit"
						size="large"
						className="w-36 rounded-md outline-none border-none bg-black text-white hover:text-white"
					>
						Get OTP
					</Button>
				</div>
			</Form>
		</section>
	);
};

export default Login;