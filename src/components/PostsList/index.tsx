import React, { ComponentProps } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Item } from './Item';

type ItemProps = ComponentProps<typeof Item>;

type Props = {
  posts: Omit<ItemProps, 'onPress'>[];
  onPress: ItemProps['onPress'];
};

export const PostsList = ({ posts, onPress }: Props) => (
  <FlatList
    style={styles.base}
    data={posts}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item }) => (
      <Item
        id={item.id}
        image={item.image}
        user={item.user}
        caption={item.caption}
        comments={item.comments}
        liked={item.liked}
        onPress={onPress}
      />
    )}
  />
);

const styles = StyleSheet.create({
  base: {
    borderColor: '#DBDBDB',
    borderTopWidth: 1,
  },
});
