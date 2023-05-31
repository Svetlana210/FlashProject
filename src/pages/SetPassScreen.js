import React, {useState} from 'react';
// import axios from 'axios';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import TextInputPassword from '../components/TextInputPassword';
const SetPassScreen = ({route, navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const [token, setToken] = useState('');
  // const [refreshToken, setRefreshToken] = useState('');

  // const {showPassword, setShowPassword} = usePassword();
  // console.log(password);
  // const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  // const [checkValidPassword, setCheckValidPassword] = useState(false);

  // const setTempPassword = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://qa-api-flash.lasoft.org/api/v1/auth/sign_in',
  //       {email, password},
  //     );

  // console.log(response.data);
  //     setToken(response.data.access_token);
  //     setRefreshToken(response.data.refresh_token);
  //     // return response.data.status;
  //   } catch (error) {
  //     // Alert.alert('User is not exist');
  //     console.log(`error - ${error.message}`);
  //   }
  // };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    // setTempPassword();
    // navigation.navigate('SetPassScreen');
  };

  // console.log(token);
  // console.log(refreshToken);

  return (
    <View style={styles.master}>
      <View style={styles.wrap}>
        <Text style={styles.text}>Set password</Text>

        <View styles={styles.container}>
          <TextInputPassword
            password={password}
            setPassword={setPassword}
            style={styles.eye}
          />
          <TextInputPassword
            password={confirmPassword}
            setPassword={setConfirmPassword}
            style={styles.eyeConf}
          />
        </View>

        {password ? (
          <TouchableOpacity style={styles.btn} onPress={handleOnPasswordlBtn}>
            <Text style={styles.btnText}>SIGN UP</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btnDisable}
            disabled
            onPress={handleOnPasswordlBtn}>
            <Text style={styles.btnTextDisable}>SIGN UP</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default SetPassScreen;

const styles = StyleSheet.create({
  master: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrap: {
    width: 328,
    marginHorizontal: 40,
  },
  text: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 16,
    marginTop: 32,
    // marginLeft: 25,
    color: '#1D252D',
    fontFamily: 'TTNorms-Medium',
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 18.88,
    marginBottom: 24,
  },
  btn: {
    backgroundColor: '#F0B528',
    paddingHorizontal: 133,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 24,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 133,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 18,
  },
  btnText: {fontFamily: 'TTNorms-Bold', color: '#1D252D'},
  btnTextDisable: {fontFamily: 'TTNorms-Bold', color: '#A1A1A1'},
  textLabel: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    fontFamily: 'TTNorms-Regular',
  },
  // input: {
  //   position: 'relative',
  //   width: 328,
  //   height: 44,
  //   paddingVertical: 10,
  //   paddingHorizontal: 12,
  //   borderColor: '#DBDBDB',
  //   borderWidth: 1,
  //   borderRadius: 4,
  //   color: '#1D252D',
  //   fontSize: 16,
  //   marginTop: 4,

  //   fontFamily: 'TTNorms-Regular',
  // },
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
  eye: {
    top: 15,
  },
  eyeConf: {
    top: 65,
  },
});
