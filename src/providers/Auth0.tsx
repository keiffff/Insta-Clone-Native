import React, { ReactNode, createContext, useContext } from 'react';
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
  const auth0Client = new Auth0({ domain: auth0Config.domain, clientId: auth0Config.clientId });

  return <Auth0Context.Provider value={auth0Client}>{children}</Auth0Context.Provider>;
};
