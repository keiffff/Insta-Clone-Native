import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { IconButton, themeList } from '.';

storiesOf('IconButton', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const theme = select('Theme', themeList, themeList[0]);
    const name = text('Name', 'camera');

    return (
      <View style={styles.base}>
        <Text style={styles.label}>Small</Text>
        <IconButton theme={theme} name={name} size="small" />
        <Text style={styles.label}>Medium</Text>
        <IconButton theme={theme} name={name} size="medium" />
        <Text style={styles.label}>Large</Text>
        <IconButton theme={theme} name={name} size="large" />
      </View>
    );
  });

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
