import { configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

configure(() => {
  loadStories();
}, module);
