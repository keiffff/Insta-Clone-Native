import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react-native',
  configPath: path.resolve(__dirname, 'config.js'),
});
