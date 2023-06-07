/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';
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

  const {publicAxios} = useContext(AxiosContext);

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

  const sendEmail = async () => {
    try {
      const response = await publicAxios.post('/auth/password_recovery', {
        email,
      });
      console.log(response);
    } catch (error) {
      console.log(`error - ${error.message}`);
    }
  };

  const handleOnEmailBtn = e => {
    e.preventDefault();
    sendEmail();
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
              <TouchableOpacity style={styles.btn} onPress={handleOnEmailBtn}>
                <AppText isBold style={styles.btnText}>
                  SEND
                </AppText>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.btnDisable}
                disabled
                onPress={handleOnEmailBtn}>
                <AppText isBold style={styles.btnTextDisable}>
                  SEND
                </AppText>
              </TouchableOpacity>
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
    fontFamily: 'TTNorms-Medium',
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
    color: '#46596D',
    fontFamily: 'TTNorms-Regular',
  },
  btn: {
    width: 330,
    backgroundColor: '#F0B528',
    paddingHorizontal: 140,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 8,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 140,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 8,
  },
  btnText: {fontFamily: 'TTNorms-Bold', color: '#1D252D', fontSize: 14},
  btnTextDisable: {fontFamily: 'TTNorms-Bold', color: '#A1A1A1', fontSize: 14},
  textLabel: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    fontFamily: 'TTNorms-Regular',
  },
  input: {
    width: 328,
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 4,
    color: '#1D252D',
    fontSize: 16,
    marginTop: 4,

    fontFamily: 'TTNorms-Regular',
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
