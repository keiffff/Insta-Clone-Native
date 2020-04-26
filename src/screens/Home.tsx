import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFetchSession } from '../hooks/fetchSession';

export const Home = () => {
  const token = useFetchSession();

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      <Text>{token ? 'Log Out' : 'Log In'}</Text>
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
