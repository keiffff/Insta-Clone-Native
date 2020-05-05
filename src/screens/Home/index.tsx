import React, { useMemo, useCallback, ComponentProps } from 'react';
import { useAuth0 } from 'providers/Auth0';
import { PostsList } from 'components/PostsList';
import { LoadingView } from 'components/LoadingView';
import { useDeleteLikeMutation, useNotifyNewPostsSubscription, useInsertLikeMutation } from 'types/hasura';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Logo } from './Logo';
import { NavButton } from './NavButton';
import { CameraButton } from './CameraButton';

export const Home = () => {
  const currentUser = useAuth0();
  const { loading: notifyNewPostsDataLoading, data: notifyNewPostsData } = useNotifyNewPostsSubscription({
    variables: { userId: currentUser.sub },
  });
  const [insertLike] = useInsertLikeMutation();
  const [deleteLike] = useDeleteLikeMutation();
  const posts = useMemo(
    () =>
      notifyNewPostsData?.posts.map(({ id, image, user, caption, comments, likes }) => ({
        id,
        image,
        user,
        caption,
        comments,
        liked: likes.length > 0,
      })) ?? [],
    [notifyNewPostsData],
  );
  const handlePressPostItem = useCallback<ComponentProps<typeof PostsList>['onPress']>(
    (action, postId) => {
      const likeOptions = {
        variables: { postId, userId: currentUser.sub },
      };
      switch (action) {
        case 'like':
          insertLike(likeOptions);
          break;
        case 'unlike':
          deleteLike(likeOptions);
          break;
        case 'comment':
          break;
      }
    },
    [currentUser.sub, insertLike, deleteLike],
  );

  return notifyNewPostsDataLoading ? <LoadingView /> : <PostsList posts={posts} onPress={handlePressPostItem} />;
};

export const HomeOptions: StackHeaderOptions = {
  headerTitle: () => <Logo />,
  headerLeft: () => <CameraButton />,
  headerRight: () => <NavButton />,
  headerTitleAlign: 'center',
};
