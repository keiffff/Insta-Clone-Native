import React, { ComponentProps } from 'react';
import { Item } from './Item';

type Props = {
  posts: ComponentProps<typeof Item>[];
};

export const PostsList = ({ posts }: Props) => {
  return (
    <>
      {posts.map(({ id, image, user }) => (
        <Item key={id} id={id} image={image} user={user} />
      ))}
    </>
  );
};
