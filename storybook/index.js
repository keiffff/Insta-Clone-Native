import { getStorybookUI } from '@storybook/react-native';
import './config';
import './rn-addons';

export const Storybook = getStorybookUI({
  asyncStorage: require('@react-native-community/async-storage').default,
});
