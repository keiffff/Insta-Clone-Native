import React, { useMemo } from 'react';
import { useAuth0 } from 'providers/Auth0';
import { PostsList } from 'components/PostsList';
import { useNotifyNewPostsSubscription } from 'types/hasura';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Logo } from './Logo';
import { NavButton } from './NavButton';
import { CameraButton } from './CameraButton';

export const Home = () => {
  const currentUser = useAuth0();
  const { data } = useNotifyNewPostsSubscription({ variables: { userId: currentUser.sub } });
  const posts = useMemo(() => data?.posts.map(({ id, image, user }) => ({ id, image, user })) ?? [], [data]);

  return <PostsList posts={posts} />;
};

export const HomeOptions: StackHeaderOptions = {
  headerTitle: () => <Logo />,
  headerLeft: () => <CameraButton />,
  headerRight: () => <NavButton />,
  headerTitleAlign: 'center',
};
