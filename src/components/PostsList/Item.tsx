import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Animated, View, Text, Image, StyleSheet } from 'react-native';
import { IconButton } from 'components/IconButton';
import { circle } from 'helpers/styles';

type Props = {
  id: number;
  image: string;
  user: {
    id: string;
    avatar: string;
    name: string;
  };
  caption: string;
  comments: { id: number; comment: string; user: { name: string } }[];
  liked?: boolean;
  onPress: (action: 'like' | 'unlike' | 'comment', postId: number) => void;
};

export const Item = ({ id, image, user, caption, comments, liked = false, onPress }: Props) => {
  const likeButtonScale = useRef(new Animated.Value(1)).current;
  const [like, setLike] = useState(false);
  const handleToggleLike = useCallback(() => {
    Animated.sequence([
      Animated.timing(likeButtonScale, { toValue: 0.8, useNativeDriver: true, duration: 100 }),
      Animated.timing(likeButtonScale, { toValue: 1, useNativeDriver: true, duration: 100 }),
    ]).start();
    setLike((v) => !v);
    onPress(like ? 'unlike' : 'like', id);
  }, [onPress, like, id, likeButtonScale]);
  const handlePressComment = useCallback(() => onPress('comment', id), [onPress, id]);
  useEffect(() => {
    setLike(liked);
  }, [liked]);

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
          <IconButton theme="Feather" name="more-horizontal" />
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
        <Animated.View style={{ transform: [{ scale: likeButtonScale }] }}>
          <IconButton
            theme="FontAwesome"
            name={like ? 'heart' : 'heart-o'}
            color={like ? '#DB183d' : undefined}
            onPress={handleToggleLike}
          />
        </Animated.View>
        <View style={styles.commentButtonWrapper}>
          <IconButton theme="Feather" name="message-circle" onPress={handlePressComment} />
        </View>
      </View>
      <View style={styles.itemFooter}>
        <View style={styles.itemFooterRow}>
          <Text numberOfLines={2}>
            <Text style={styles.textEmphasis}>{`${user.name} `}</Text>
            {caption}
          </Text>
        </View>
        {comments.length > 0 ? (
          <View style={styles.itemFooterRow}>
            <Text numberOfLines={2}>
              <Text style={styles.textEmphasis}>{`${comments[0].user.name} `}</Text>
              {comments[0].comment}
            </Text>
          </View>
        ) : null}
        {comments.length > 1 ? (
          <Text style={styles.commentNavigation}>{`コメント${comments.length}件すべてを表示`}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingBottom: 8,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
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
    padding: 4,
  },
  commentButtonWrapper: {
    marginLeft: -16,
  },
  itemFooter: {
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  itemFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  textEmphasis: {
    fontWeight: 'bold',
  },
  commentNavigation: {
    color: '#999999',
  },
});
