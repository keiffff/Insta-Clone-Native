import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import { IconButtonProps } from 'react-native-vector-icons/Icon';

type Theme = keyof typeof IconElements;

type Props = {
  theme: Theme;
  size?: 'small' | 'medium' | 'large';
} & Omit<IconButtonProps, 'size'>;

const IconElements = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Zocial,
} as const;

const sizeValue = {
  small: 12,
  medium: 24,
  large: 36,
} as const;

export const themeList = Object.keys(IconElements) as Theme[];

export const IconButton = ({
  name,
  theme,
  size = 'medium',
  color = '#262626',
  backgroundColor = 'transparent',
  ...rest
}: Props) => {
  const Icon = IconElements[theme];

  return <Icon.Button name={name} size={sizeValue[size]} backgroundColor={backgroundColor} color={color} {...rest} />;
};
