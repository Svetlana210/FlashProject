import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import usePassword from '../components/showPasswordHook';
import Feather from 'react-native-vector-icons/Feather';
const TextInputPassword = ({password, setPassword, style}) => {
  const {showPassword, setShowPassword} = usePassword();
  return (
    <>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="create password"
        secureTextEntry={showPassword}
        // keyboardType="email-address"
        onChangeText={text => setPassword(text)}
        value={password}
        // onFocus={() => isFocusedPassword(true)}
        // onBlur={() => isFocusedPassword(false)}
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
