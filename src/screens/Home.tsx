import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth0 } from '../providers/Auth0';
import { auth0Config } from '../constants/config';

export const Home = () => {
  const auth0Client = useAuth0();
  const [token, setToken] = useState('');
  const handleLogin = useCallback(async () => {
    const { accessToken } = await auth0Client.webAuth.authorize({
      scope: auth0Config.scope,
      audience: auth0Config.audience,
    });
    setToken(accessToken);
  }, [auth0Client.webAuth]);
  const handleLogout = useCallback(async () => {
    await auth0Client.webAuth.clearSession();
    setToken('');
  }, [auth0Client.webAuth]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      <Button onPress={token ? handleLogout : handleLogin} title={token ? 'Log Out' : 'Log In'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
