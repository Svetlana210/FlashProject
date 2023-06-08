/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import TextInputPassword from '../../components/reusableComponents/TextInputPassword';
import AppText from '../../components/reusableComponents/AppText';
import Button from '../../components/reusableComponents/Button';
import {AxiosContext} from '../../context/axiosContext';

const SignInScreen = ({route, navigation}) => {
  const {signInPass} = useContext(AxiosContext);
  const [password, setPassword] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);

  const email = route.params.userEmail ? route.params.userEmail : 'your email';

  const hideKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    signInPass(email, password);
  };
  const handleOnForgotPass = e => {
    e.preventDefault();
    navigation.navigate('PassRecoveryScreen');
  };

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
              <Button
                text="SIGN IN"
                style={{...styles.btn, marginTop: showKeyboard ? 20 : 37}}
                onPress={handleOnPasswordlBtn}
                styleText={styles.btnText}
              />
            ) : (
              <Button
                text="SIGN IN"
                style={{
                  ...styles.btnDisable,
                  marginTop: showKeyboard ? 20 : 37,
                }}
                onPress={handleOnPasswordlBtn}
                styleText={styles.btnTextDisable}
              />
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
    paddingHorizontal: 130,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 130,
  },
  btnTextDisable: {color: '#A1A1A1'},
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
