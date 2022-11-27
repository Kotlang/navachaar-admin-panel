import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ILogin {
    authHeader: string;
    emailOrPhone: string;
    setAuthHeader: (authHeader: string) => void;
    setEmailOrPhone: (emailOrPhone: string) => void;
}

const useLoginStore = create<ILogin>()(
    devtools(
        persist(
            (set) => ({
                authHeader: '',
                emailOrPhone: '',
                setAuthHeader: (authHeader) => {
                    set((state) => {
                        return { ...state, authHeader };
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