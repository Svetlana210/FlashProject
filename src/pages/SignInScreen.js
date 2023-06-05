/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import TextInputPassword from '../components/TextInputPassword';
import {AuthContext} from '../context/authContext';

import {AxiosContext} from '../context/axiosContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Alert} from 'react-native';

const SignInScreen = ({route, navigation}) => {
  const authContext = useContext(AuthContext);
  const {publicAxios} = useContext(AxiosContext);
  const [password, setPassword] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  const signInPass = async () => {
    try {
      const response = await publicAxios.post('/auth/sign_in', {
        email,
        password,
      });
      const {access_token} = response.data;
      console.log(response.data);
      authContext.setAuthState({
        access_token,
        authenticated: true,
        // authenticated: false,
      });
      await AsyncStorage.setItem('token', JSON.stringify(access_token));
      // console.log(await AsyncStorage.getItem('token'));

      // await Keychain.setGenericPassword(
      //   'token',
      //   JSON.stringify({
      //     access_token,
      //   }),
      // );
      // return response.data.status;
    } catch (error) {
      Alert.alert('Incorrect password');
      console.log(`error token - ${error.message}`);
    }
  };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    signInPass();
    // navigation.navigate('SetPassScreen');
  };
  const handleOnForgotPass = e => {
    e.preventDefault();
    navigation.navigate('PassRecoveryScreen');
  };
  const email = route.params.userEmail ? route.params.userEmail : 'your email';
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerWrap}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.master}>
          <View style={styles.wrap}>
            <Text style={styles.text}>Welcome back</Text>
            <Text style={styles.textSmall}>
              Use the password for {email} to sign in
            </Text>

            <View>
              <Text style={styles.textLabel}>Your password</Text>
              <TextInputPassword
                password={password}
                setPassword={setPassword}
                showKeyboard={showKeyboard}
                setShowKeyboard={setShowKeyboard}
              />
              <TouchableOpacity
                style={styles.btnForgot}
                onPress={handleOnForgotPass}>
                <Text style={styles.textForgot}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {password ? (
              <TouchableOpacity
                style={{...styles.btn, marginTop: showKeyboard ? 20 : 37}}
                onPress={handleOnPasswordlBtn}>
                <Text style={styles.btnText}>SIGN IN</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  ...styles.btnDisable,
                  marginTop: showKeyboard ? 20 : 37,
                }}
                disabled
                onPress={handleOnPasswordlBtn}>
                <Text style={styles.btnTextDisable}>SIGN IN</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  master: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerWrap: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  touch: {backgroundColor: '#ffffff'},
  wrap: {width: 328, marginHorizontal: 40, backgroundColor: '#ffffff'},
  text: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 16,
    marginTop: 32,
    color: '#1D252D',
    fontFamily: 'TTNorms-Medium',
  },
  textSmall: {
    width: 280,
    fontFamily: 'TTNorms-Regular',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 24,
    color: '#46596D',
  },
  btnForgot: {marginTop: 13},
  textForgot: {
    color: '#F0B528',
    fontSize: 14,
    lineHeight: 16,

    fontFamily: 'TTNorms-Regular',
  },
  btn: {
    width: 328,
    backgroundColor: '#F0B528',
    paddingHorizontal: 130,
    paddingVertical: 13,
    borderRadius: 4,
    // marginTop: 37,
  },
  btnDisable: {
    width: 328,
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 130,
    paddingVertical: 13,
    borderRadius: 4,
    // marginTop: 37,
  },
  btnText: {fontFamily: 'TTNorms-Bold', color: '#1D252D', fontSize: 14},
  btnTextDisable: {fontFamily: 'TTNorms-Bold', color: '#A1A1A1', fontSize: 14},
  textLabel: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    fontFamily: 'TTNorms-Regular',
  },
  container: {
    position: 'relative',
  },

  textFailed: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 10,
    marginTop: 5,
  },
  textOk: {
    marginTop: 0,
  },
});
