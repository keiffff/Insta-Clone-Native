import React, { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Auth0 from 'react-native-auth0';
import { auth0Config } from '../constants/config';

type Props = {
  children: ReactNode;
};

const Auth0Context = createContext((null as unknown) as Auth0);

export function useAuth0() {
  return useContext(Auth0Context);
}

export const Auth0Provider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const auth0Client = new Auth0({ domain: auth0Config.domain, clientId: auth0Config.clientId });
  const login = useCallback(async () => {
    setLoading(false);
    const { accessToken } = await auth0Client.webAuth.authorize({
      scope: auth0Config.scope,
      audience: auth0Config.audience,
    });
    await AsyncStorage.setItem('@token', accessToken);
    setLoading(false);
  }, [auth0Client.webAuth]);
  useEffect(() => {
    login();
  }, [login]);

  return (
    <Auth0Context.Provider value={auth0Client}>{loading ? <ActivityIndicator /> : children}</Auth0Context.Provider>
  );
};
