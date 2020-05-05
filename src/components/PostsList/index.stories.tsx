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
    caption: 'こないだいったカフェ',
    comments: [
      {
        id: 1,
        comment: 'よさそう',
        user: {
          name: '!',
        },
      },
      {
        id: 2,
        comment: 'よさそう!',
        user: {
          name: 'Kei',
        },
      },
    ],
  },
  {
    id: 2,
    image: 'https://storage.googleapis.com/image-processor-app/46C493F4-4703-4A4A-8D7F-60F2B8D37604.jpeg',
    user: {
      id: 'google-oauth2|116031656602944320296',
      name: '喫茶ステラ Official',
      avatar: 'https://storage.googleapis.com/image-processor-app/46C493F4-4703-4A4A-8D7F-60F2B8D37604.jpeg',
    },
    caption:
      '喫茶ステラオープンしました。\n当店おすすめのダージリンティーといちごタルトをぜひお楽しみください。みなさまのご来店お待ちしております。',
    comments: [],
  },
  {
    id: 3,
    image: 'https://storage.googleapis.com/image-processor-app/EC0B236A-0498-471F-B03D-F51671A1D136.jpeg',
    user: {
      id: 'google-oauth2|116031656602944320296',
      name: 'Kei',
      avatar: 'https://storage.googleapis.com/image-processor-app/IMG_1087 (1).JPG',
    },
    caption: 'うおおおおおおおおおおおおおおおおおおおおおおおお',
    comments: [
      {
        id: 3,
        comment: 'ほんまそれ',
        user: {
          name: 'Kei sub',
        },
      },
    ],
  },
];
