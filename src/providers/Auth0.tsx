import React, { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import Auth0 from 'react-native-auth0';
import { auth0Config } from 'constants/config';
import { StorageKey } from 'constants/storage';

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

const auth0Client = new Auth0({ domain: auth0Config.domain, clientId: auth0Config.clientId });

export const Auth0Provider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState((null as unknown) as User);

  const login = useCallback(async () => {
    try {
      const { accessToken, refreshToken } = await auth0Client.webAuth.authorize({
        scope: auth0Config.scope,
        audience: auth0Config.audience,
        prompt: 'login',
      });
      // console.log({ accessToken, refreshToken });
      const { name, email, picture, sub } = await auth0Client.auth.userInfo({ token: accessToken });
      setUser({ name, email, picture, sub });
      setLoading(false);
      await Promise.all([
        AsyncStorage.setItem(StorageKey.accessToken, accessToken),
        AsyncStorage.setItem(StorageKey.refreshToken, refreshToken),
      ]);
    } catch (e) {
      RNRestart.Restart();
    }
  }, []);

  const initialize = useCallback(async () => {
    setLoading(true);
    const accessToken = await AsyncStorage.getItem(StorageKey.accessToken);

    if (accessToken) {
      try {
        const { name, email, picture, sub } = await auth0Client.auth.userInfo({ token: accessToken });
        setUser({ name, email, picture, sub });
        setLoading(false);
      } catch (e) {
        const refreshToken = await AsyncStorage.getItem(StorageKey.refreshToken);
        if (refreshToken) {
          const refreshTokenResponse = await auth0Client.auth.refreshToken({ refreshToken });
          await AsyncStorage.setItem(StorageKey.accessToken, refreshTokenResponse.accessToken);
          RNRestart.Restart();
        } else {
          login();
        }
      }
    } else {
      login();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? <ActivityIndicator /> : <Auth0Context.Provider value={user}>{children}</Auth0Context.Provider>;
};
