import { createContext, ReactNode, useEffect, useState } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();


interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    isUserLoading: boolean;
    signIn: () => Promise<void>;
}

interface AuthProviderPropos {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children } : AuthProviderPropos ) {
    const [user, setUser] =  useState<UserProps>({} as UserProps);
    const [isUserLoading, setIsUserLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '638650312196-pah4ttd1m1vp7497mbi14k179cpdpk8o.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })

   //console.log(AuthSession.makeRedirectUri({ useProxy: true}));

   async function signIn(){

    try {
        setIsUserLoading(true);
        await promptAsync();
    } catch (error) {    
    } finally{
        setIsUserLoading(false)
    }

   }

   async function signInWithGoogle(access_token: string) {
    
   }

   useEffect(() => {
    if(response?.type === 'success' && response.authentication?.accessToken){
        signInWithGoogle(response.authentication.accessToken);
    }

   }, [response])

   return (
    <AuthContext.Provider value={{
        signIn,
        isUserLoading,
        user,
    }}>
        {children}

    </AuthContext.Provider>
    )
    
}