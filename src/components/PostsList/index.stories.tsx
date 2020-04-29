import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { PostsList } from '.';

storiesOf('Example', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ScrollView>
      <PostsList posts={dummyPosts} />
    </ScrollView>
  ));

const dummyPosts = [
  {
    id: 1,
    image: 'https://picsum.photos/id/237/200/300',
    user: {
      id: 'google-oauth2|116031656602944320296',
      name: 'Kei',
      avatar: 'https://picsum.photos/seed/picsum/200/300',
    },
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/237/200/300',
    user: {
      id: 'google-oauth2|116031656602944320296',
      name: 'Kei',
      avatar: 'https://picsum.photos/seed/picsum/200/300',
    },
  },
];
