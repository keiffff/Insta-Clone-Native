import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text as textKnobs } from '@storybook/addon-knobs';

type Props = {
  text: string;
};

const Example = ({ text }: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});

storiesOf('Example', module)
  .addDecorator(withKnobs)
  .add('default', () => <Example text={textKnobs('text', 'TypeScript Example')} />);
