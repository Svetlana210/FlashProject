import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Text} from 'react-native-elements';

const HeaderMain = ({children, text, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{text}</Text>
      {children}
    </View>
  );
};

export default HeaderMain;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 85,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#d5d2d6',
  },
  text: {
    position: 'absolute',
    top: 43,
    left: 18,
    fontFamily: 'TTNorms-Medium',
    fontSize: 20,
  },
});
