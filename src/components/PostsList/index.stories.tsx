import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { PostsList } from '.';

storiesOf('PostsList', module)
  .addDecorator(withKnobs)
  .add('default', () => <PostsList posts={dummyPosts} />);

const dummyPosts = [
  {
    id: 1,
    image: 'https://storage.googleapis.com/image-processor-app/iOS の画像.jpg',
    user: {
      id: 'google-oauth2|104723435908719379671',
      name: 'Kei sub',
      avatar: 'https://storage.googleapis.com/image-processor-app/51147FD4-5199-4073-BF14-88C39812106A.jpeg',
    },
  },
  {
    id: 2,
    image: 'https://storage.googleapis.com/image-processor-app/46C493F4-4703-4A4A-8D7F-60F2B8D37604.jpeg',
    user: {
      id: 'google-oauth2|116031656602944320296',
      name: 'Kei',
      avatar: 'https://storage.googleapis.com/image-processor-app/IMG_1087 (1).JPG',
    },
  },
  {
    id: 3,
    image: 'https://storage.googleapis.com/image-processor-app/55C7EEE5-764A-4911-8435-7CB09EA384D7.jpeg',
    user: {
      id: 'google-oauth2|116031656602944320296',
      name: 'Kei',
      avatar: 'https://storage.googleapis.com/image-processor-app/IMG_1087 (1).JPG',
    },
  },
];
