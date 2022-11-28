import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ILogin {
    authHeader: string;
    loginId: string;
    emailOrPhone: string;
    setAuthHeader: (authHeader: string) => void;
    setLoginId: (loginId: string) => void;
    setEmailOrPhone: (emailOrPhone: string) => void;
}

const useLoginStore = create<ILogin>()(
    devtools(
        persist(
            (set) => ({
                emailOrPhone: '',
                authHeader: '',
                loginId: '',
                setAuthHeader: (authHeader) => {
                    set((state) => {
                        return { ...state, authHeader };
                    });
                },
                setLoginId: (loginId) => {
                    set((state) => {
                        return { ...state, loginId };
                    });
                },
                setEmailOrPhone: (emailOrPhone) => {
                    set((state) => {
                        return { ...state, emailOrPhone };
                    });
                },
            }),
            {
                name: "login"
            }
        ),
    ),
);

export default useLoginStore;