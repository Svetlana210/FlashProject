/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
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
      // setUserStatus(response.data.status);
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
      // return response.data.status;
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
          <Text style={styles.text}>Enter your work email address</Text>
          <View>
            <Text style={styles.textLabel}>Your email</Text>
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
              <Text style={styles.textFailed}>
                Email does not appear to be valid
              </Text>
            ) : (
              <Text style={styles.textOk}> </Text>
            )}
          </View>

          {email ? (
            <TouchableOpacity style={styles.btn} onPress={handleOnEmailBtn}>
              <Text style={styles.btnText}>CONTINUE WITH EMAIL</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btnDisable}
              disabled
              onPress={handleOnEmailBtn}>
              <Text style={styles.btnTextDisable}>CONTINUE WITH EMAIL</Text>
            </TouchableOpacity>
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
    // marginVertical: 30,
    // marginHorizontal: 30,
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
    fontFamily: 'TTNorms-Medium',
  },
  btn: {
    width: 330,
    backgroundColor: '#F0B528',
    paddingHorizontal: 79.5,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 24,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 79.5,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 18,
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