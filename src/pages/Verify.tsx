import { Button } from 'antd';
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { getLoginClient, getVerifyRequest } from '../clients/login';
import { useLoginStore } from '../store';

const VerifyPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const { emailOrPhone, setAuthHeader } = useLoginStore(({ emailOrPhone, setAuthHeader }) => ({ 
    emailOrPhone,
    setAuthHeader
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
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          containerStyle='bg-gray-200 p-5 rounded-md'
          inputStyle={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "16px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue"
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
            color: "#000"
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
                  navigate("/");
                }
              })
            }}
					>
            Submit
					</Button>
				</div>
    </section>
  )
}

export default VerifyPage