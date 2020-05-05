import React, { ComponentProps } from 'react';
import { FlatList } from 'react-native';
import { Item } from './Item';

type Props = {
  posts: ComponentProps<typeof Item>[];
};

export const PostsList = ({ posts }: Props) => (
  <FlatList
    data={posts}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item }) => <Item id={item.id} image={item.image} user={item.user} />}
  />
);
