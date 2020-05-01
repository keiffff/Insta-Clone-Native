import React, { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Auth0 from 'react-native-auth0';
import { auth0Config } from 'constants/config';

type User = {
  name: string;
  email: string;
  picture: string;
  sub: string;
};

type Props = {
  children: ReactNode;
};

const Auth0Context = createContext((null as unknown) as User);

export function useAuth0() {
  return useContext(Auth0Context);
}

export const Auth0Provider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState((null as unknown) as User);
  const auth0Client = new Auth0({ domain: auth0Config.domain, clientId: auth0Config.clientId });
  const login = useCallback(async () => {
    setLoading(true);
    let token = '';
    const storageValue = await AsyncStorage.getItem('@token');
    if (!storageValue) {
      const { accessToken } = await auth0Client.webAuth.authorize({
        scope: auth0Config.scope,
        audience: auth0Config.audience,
      });
      token = accessToken;
    } else {
      token = storageValue;
    }
    const { name, email, picture, sub } = await auth0Client.auth.userInfo({ token });
    setUser({ name, email, picture, sub });
    await AsyncStorage.setItem('@token', token);
    setLoading(false);
  }, [auth0Client.webAuth, auth0Client.auth]);
  useEffect(() => {
    login();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? <ActivityIndicator /> : <Auth0Context.Provider value={user}>{children}</Auth0Context.Provider>;
};
