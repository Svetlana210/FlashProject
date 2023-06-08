/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';
import Button from '../../components/reusableComponents/Button';
import {AxiosContext} from '../../context/axiosContext';

const PassRecoveryScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  const {sendEmail} = useContext(AxiosContext);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleOnEmailBtn = e => {
    e.preventDefault();
    sendEmail(email);
    navigation.navigate('CheckEmailScreen', {
      userEmail: email,
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerWrap}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.master}>
          <View style={styles.wrap}>
            <AppText isMedium style={styles.text}>
              Password recovery
            </AppText>
            <View>
              <AppText style={styles.textSmall}>
                Please enter your email, and we will send you further
                instructions.
              </AppText>
              <TextInput
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  ...styles.input,

                  borderColor: isFocusedEmail ? '#F0B528' : '#DBDBDB',
                }}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => handleCheckEmail(text)}
                value={email}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => {
                  setIsFocusedEmail(false);
                }}
              />
              {checkValidEmail && email ? (
                <AppText style={styles.textFailed}>
                  Email does not appear to be valid
                </AppText>
              ) : (
                <AppText style={styles.textOk}> </AppText>
              )}
            </View>

            {email ? (
              <Button
                text="SEND"
                style={styles.btn}
                onPress={handleOnEmailBtn}
                styleText={styles.btnText}
              />
            ) : (
              <Button
                text="SEND"
                style={styles.btnDisable}
                onPress={handleOnEmailBtn}
                styleText={styles.btnTextDisable}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default PassRecoveryScreen;

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
  wrap: {
    width: 328,
    marginHorizontal: 40,
  },
  text: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 24,
    marginTop: 32,
    color: '#1D252D',
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
    color: '#46596D',
  },
  btn: {
    paddingHorizontal: 140,
    marginTop: 8,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 140,
    marginTop: 8,
  },
  btnTextDisable: {color: '#A1A1A1'},
  textLabel: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
  },
  input: {
    width: 328,
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
    color: '#1D252D',
    fontSize: 16,
    marginTop: 4,
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
