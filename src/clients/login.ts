import { LoginClient } from "../generated/LoginServiceClientPb";
import { LoginRequest, VerifyRequest } from "../generated/login_pb";

const getLoginClient = (() => {
    const authURL = process.env.REACT_APP_AUTH_URL;
    let client: LoginClient;
    if (authURL) {
        client = new LoginClient(authURL)
    }
    return () => {
        return client
    }
})();

const getLoginRequest = (emailOrPhone: string) => {
    let loginRequest = new LoginRequest();
    const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
    if (authDomain) {
      loginRequest.setDomain(authDomain);
    }
    loginRequest.setEmailorphone(emailOrPhone);
    return loginRequest;
};

const getVerifyRequest = (emailOrPhone: string, otp: string) => {
    let verifyRequest = new VerifyRequest();
    const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
    if (authDomain) {
        verifyRequest.setDomain(authDomain);
    }
    verifyRequest.setEmailorphone(emailOrPhone);
    verifyRequest.setOtp(otp);
    return verifyRequest;
}

export {
    getLoginClient,
    getLoginRequest,
    getVerifyRequest
};