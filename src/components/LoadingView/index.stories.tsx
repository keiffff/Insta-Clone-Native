import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { LoadingView } from '.';

storiesOf('LoadingView', module)
  .addDecorator(withKnobs)
  .add('small', () => <LoadingView size="small" />)
  .add('large', () => <LoadingView size="large" />);
