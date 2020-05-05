import React, { ComponentProps } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Item } from './Item';

type Props = {
  posts: ComponentProps<typeof Item>[];
};

export const PostsList = ({ posts }: Props) => (
  <FlatList
    style={styles.base}
    data={posts}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item }) => (
      <Item id={item.id} image={item.image} user={item.user} caption={item.caption} comments={item.comments} />
    )}
  />
);

const styles = StyleSheet.create({
  base: {
    borderColor: '#DBDBDB',
    borderTopWidth: 1,
  },
});
