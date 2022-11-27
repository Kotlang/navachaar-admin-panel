import React from 'react';
import { LoginRequest } from './generated/login_pb'
import { LoginClient } from './generated/LoginServiceClientPb'

function App() {
  console.log(process.env.REACT_APP_AUTH_DOMAIN);
  const grpcCall = () => {
    let loginRequest = new LoginRequest();
    loginRequest.setEmailorphone("8054984350");
    const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
    if (authDomain) {
      loginRequest.setDomain(authDomain);
    }
    console.log('hi bye');
    const authURL = process.env.REACT_APP_AUTH_URL;
    if (authURL) {
      const loginClient = new LoginClient(authURL).login(loginRequest, {}, (err, response) => {
        console.log({err, response})
      });
    }
  }
  return (
    <div className='bg-red-500'>
      <button className='bg-blue-500 text-white' onClick={grpcCall}>Click</button>
    </div>
  );
}

export default App;
