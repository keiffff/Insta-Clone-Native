import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { ApolloProvider as ApolloProviderOrigin } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import AsyncStorage from '@react-native-community/async-storage';
import { gqlEndpoints } from '../constants/config';

type Props = {
  children: ReactNode;
};

const wsUri = gqlEndpoints.hasura.replace(/^https?/, 'wss');

function createLinks(token?: string) {
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
  const wsLink = new WebSocketLink({
    uri: wsUri,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          ...authHeader,
        },
      },
    },
  });
  const httpLink = new HttpLink({
    uri: gqlEndpoints.hasura,
    headers: {
      ...authHeader,
    },
  });
  const uploadLink = createUploadLink({
    uri: gqlEndpoints.fileUpload,
    headers: {
      'keep-alive': 'true',
    },
  });
  const uploadOrHttpLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return (
        (definition.kind === 'OperationDefinition' &&
          definition.operation === 'mutation' &&
          definition.name?.value === 'uploadFile') ||
        false
      );
    },
    uploadLink,
    httpLink,
  );
  const terminatingLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    uploadOrHttpLink,
  );

  return terminatingLink;
}

const inMemoryCache = new InMemoryCache();

function makeApolloClient(token: string) {
  return new ApolloClient({ link: createLinks(token), cache: inMemoryCache });
}

export const ApolloProvider = ({ children }: Props) => {
  const [client, setClient] = useState((null as unknown) as ApolloClient<NormalizedCacheObject>);
  useEffect(() => {
    let cleanedUp = false;
    const initApollo = async () => {
      const storageValue = await AsyncStorage.getItem('@token');
      if (!cleanedUp) {
        setClient(makeApolloClient(storageValue ?? ''));
      }
    };
    initApollo();

    return () => {
      cleanedUp = true;
    };
  }, []);

  return client ? (
    <ApolloProviderOrigin key={`${client}`} client={client}>
      {children}
    </ApolloProviderOrigin>
  ) : (
    <ActivityIndicator />
  );
};
