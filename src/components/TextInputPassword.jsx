/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import usePassword from '../components/showPasswordHook';
import Feather from 'react-native-vector-icons/Feather';
const TextInputPassword = ({password, setPassword, style, text}) => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const {showPassword, setShowPassword} = usePassword();
  return (
    <>
      <TextInput
        style={{
          ...styles.input,
          borderColor: isFocusedEmail ? '#F0B528' : '#DBDBDB',
        }}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={text}
        secureTextEntry={showPassword}
        // keyboardType="email-address"
        onChangeText={textPass => setPassword(textPass)}
        value={password}
        onFocus={() => setIsFocusedEmail(true)}
        onBlur={() => {
          setIsFocusedEmail(false);
        }}
      />
      {password ? (
        <TouchableOpacity
          style={[styles.eye, style]}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Feather name="eye" size={23} color={'#49454F'} />
          ) : (
            <Feather name="eye-off" size={23} color={'#49454F'} />
          )}
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextInputPassword;

const styles = StyleSheet.create({
  input: {
    // position: 'relative',
    width: 328,
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 4,
    color: '#1D252D',
    fontSize: 16,
    marginTop: 4,

    fontFamily: 'TTNorms-Regular',
  },
  eye: {
    position: 'absolute',
    top: 35,
    right: 20,
  },
});
