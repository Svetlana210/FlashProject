/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';
import Button from '../../components/reusableComponents/Button';
import {AxiosContext} from '../../context/axiosContext';

const EmailScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userStatus, setUserStatus] = useState(false);
  // eslint-disable-next-line no-unused-vars
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

  const checkEmail = async () => {
    try {
      const response = await publicAxios.post('/auth/user_status', {email});
      console.log(response.data.status);
      if (response.data.status === 'Inactive') {
        setUserStatus(false);
        navigation.navigate('TempPassScreen', {
          userEmail: email,
        });
      } else if (response.data.status === 'Active') {
        setUserStatus(true);
        navigation.navigate('SignInScreen', {
          userEmail: email,
        });
      }
      console.log(response.data.status);
    } catch (error) {
      Alert.alert('User is not exist');
      console.log(`error - ${error.message}`);
    }
  };

  const handleOnEmailBtn = e => {
    e.preventDefault();
    checkEmail();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerWrap}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.master}>
          <AppText isMedium style={styles.text}>
            Enter your work email address
          </AppText>
          <View>
            <AppText style={styles.textLabel}>Your email</AppText>
            <TextInput
              style={{
                ...styles.input,

                borderColor: isFocusedEmail ? '#F0B528' : '#DBDBDB',
              }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="name@gmail.com"
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
              <></>
            )}
          </View>

          {email ? (
            <Button
              text="CONTINUE WITH EMAIL"
              style={styles.btn}
              onPress={handleOnEmailBtn}
              styleText={styles.btnText}
            />
          ) : (
            <Button
              text="CONTINUE WITH EMAIL"
              style={styles.btnDisable}
              onPres={handleOnEmailBtn}
              styleText={styles.btnTextDisable}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default EmailScreen;

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
  text: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 24,
    marginTop: 32,
    color: '#1D252D',
  },
  btn: {
    width: 330,
    marginTop: 18,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    marginTop: 18,
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
