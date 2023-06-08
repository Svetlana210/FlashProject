import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../reusableComponents/AppText';

const HeaderMain = ({children, text, style}) => {
  return (
    <View style={styles.container}>
      <AppText isMedium style={[styles.text, style]}>
        {text}
      </AppText>
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
    fontSize: 20,
    color: '#1D1B20',
  },
});
