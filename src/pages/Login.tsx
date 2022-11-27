import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getLoginClient, getLoginRequest } from '../clients/login';
import { useLoginStore } from '../store';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { authHeader, setEmailOrPhone } = useLoginStore(({ authHeader, setEmailOrPhone }) => ({
    authHeader, setEmailOrPhone 
  }));
  useEffect(() => {
      if (authHeader) {
        navigate("/");
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authHeader]);
  return (
    <section className='flex items-center justify-center min-h-screen'>
      <Form
        className='-mt-10'
        onFinish={(values) => {
          if (values.emailOrPhone) {
            setLoading(true);
            setEmailOrPhone(values.emailOrPhone);
            const loginClient = getLoginClient();
            loginClient.login(getLoginRequest(values.emailOrPhone), {}, (err, response) => {
              if (err) {
                console.error(err);
              } else {
                setLoading(false);
                navigate("/verify");
              }
            })
          }
        }}
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
                  required: true,
                  message: 'Phone number is required.'
                },
                {
                  pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "Please enter valid phone number."
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
  )
}

export default LoginPage;