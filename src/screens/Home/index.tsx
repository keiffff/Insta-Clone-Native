import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth0 } from '../../providers/Auth0';
import { useGetUsersInfoQuery } from '../../types/hasura';

export { Logo } from './Logo';

export const Home = () => {
  const currentUser = useAuth0();
  const { data } = useGetUsersInfoQuery({ variables: { id: currentUser.sub } });

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      <Text>{data && data.users_by_pk?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
