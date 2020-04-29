import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

configure(() => {
  require('./stories');
}, module);

export const Storybook = getStorybookUI({
  asyncStorage: require('@react-native-community/async-storage').default,
});
