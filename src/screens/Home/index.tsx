import React, { useMemo } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useAuth0 } from 'providers/Auth0';
import { PostsList } from 'components/PostsList';
import { useNotifyNewPostsSubscription } from 'types/hasura';

export { Logo } from './Logo';
export { NavButton } from './NavButton';
export { CameraButton } from './CameraButton';

export const Home = () => {
  const currentUser = useAuth0();
  const { data } = useNotifyNewPostsSubscription({ variables: { userId: currentUser.sub } });
  const posts = useMemo(() => data?.posts.map(({ id, image, user }) => ({ id, image, user })) ?? [], [data]);

  return (
    <ScrollView style={styles.base}>
      <PostsList posts={posts} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
