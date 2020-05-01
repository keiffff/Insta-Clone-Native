import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { circle } from 'helpers/styles';

type Props = {
  id: number;
  image: string;
  user: {
    id: string;
    avatar: string;
    name: string;
  };
};

export const Item = ({ image, user }: Props) => {
  return (
    <View style={styles.base}>
      <View style={styles.itemHeader}>
        <Image
          style={styles.avatar}
          source={{
            uri: user.avatar,
          }}
        />
        <Text style={styles.nameLabel}>{user.name}</Text>
        <View style={styles.moreButtonWrapper}>
          <Icon.Button name="more-horizontal" backgroundColor="transparent" color="#262626" />
        </View>
      </View>
      <Image
        style={styles.postImage}
        source={{
          uri: image,
        }}
        resizeMode="cover"
      />
      <View style={styles.itemMenu}>
        <View>
          <Icon.Button size={30} name="heart" backgroundColor="transparent" color="#262626" />
        </View>
        <View style={styles.commentButtonWrapper}>
          <Icon.Button size={30} name="message-circle" backgroundColor="transparent" color="#262626" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#DBDBDB',
    borderTopWidth: 1,
  },
  avatar: {
    ...circle(40),
  },
  nameLabel: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  moreButtonWrapper: {
    marginLeft: 'auto',
    marginRight: -8,
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 4,
  },
  commentButtonWrapper: {
    marginLeft: -16,
  },
});
