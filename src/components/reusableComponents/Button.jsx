import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from './AppText';

const Button = ({style, styleText, text, onPress, children, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      onPress={onPress}
      disabled={disabled}>
      {children}
      <AppText isBold style={[styles.btnText, styleText]}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#F0B528',
    marginTop: 32,
    paddingHorizontal: 79.5,
    paddingVertical: 13,
    borderRadius: 4,
  },
  btnText: {color: '#000000', fontSize: 14},
});
