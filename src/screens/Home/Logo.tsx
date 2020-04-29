import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const Logo = () => <Image style={styles.base} source={require('../../assets/images/logo.png')} />;

const styles = StyleSheet.create({
  base: {
    width: 100,
    height: 20,
  },
});
