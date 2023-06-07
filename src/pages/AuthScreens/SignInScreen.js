/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import TextInputPassword from '../../components/reusableComponents/TextInputPassword';
import AppText from '../../components/reusableComponents/AppText';
import {AuthContext} from '../../context/authContext';
import {AxiosContext} from '../../context/axiosContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      });
      await AsyncStorage.setItem('token', JSON.stringify(access_token));
    } catch (error) {
      Alert.alert('Incorrect password');
      console.log(`error token - ${error.message}`);
    }
  };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    signInPass();
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
            <AppText isMedium style={styles.text}>
              Welcome back
            </AppText>
            <AppText style={styles.textSmall}>
              Use the password for {email} to sign in
            </AppText>

            <View>
              <AppText style={styles.textLabel}>Your password</AppText>
              <TextInputPassword
                password={password}
                setPassword={setPassword}
                showKeyboard={showKeyboard}
                setShowKeyboard={setShowKeyboard}
              />
              <TouchableOpacity
                style={styles.btnForgot}
                onPress={handleOnForgotPass}>
                <AppText style={styles.textForgot}>Forgot password?</AppText>
              </TouchableOpacity>
            </View>

            {password ? (
              <TouchableOpacity
                style={{...styles.btn, marginTop: showKeyboard ? 20 : 37}}
                onPress={handleOnPasswordlBtn}>
                <AppText isBold style={styles.btnText}>
                  SIGN IN
                </AppText>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  ...styles.btnDisable,
                  marginTop: showKeyboard ? 20 : 37,
                }}
                disabled
                onPress={handleOnPasswordlBtn}>
                <AppText isBold style={styles.btnTextDisable}>
                  SIGN IN
                </AppText>
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
  },
  textSmall: {
    width: 280,
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
  },
  btn: {
    width: 328,
    backgroundColor: '#F0B528',
    paddingHorizontal: 130,
    paddingVertical: 13,
    borderRadius: 4,
  },
  btnDisable: {
    width: 328,
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 130,
    paddingVertical: 13,
    borderRadius: 4,
  },
  btnText: {color: '#1D252D', fontSize: 14},
  btnTextDisable: {color: '#A1A1A1', fontSize: 14},
  textLabel: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
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
