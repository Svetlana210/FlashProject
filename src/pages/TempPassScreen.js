import React, {useState, useContext} from 'react';
// import axios from 'axios';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TextInputPassword from '../components/TextInputPassword';
// import * as Keychain from 'react-native-keychain';
import {AuthContext} from '../context/authContext';

import {AxiosContext} from '../context/axiosContext';

const TempPassScreen = ({route, navigation}) => {
  const [password, setPassword] = useState('');

  // const [token, setToken] = useState('');
  // const [refreshToken, setRefreshToken] = useState('');

  const authContext = useContext(AuthContext);
  const {publicAxios} = useContext(AxiosContext);

  // const {showPassword, setShowPassword} = usePassword();
  // console.log(`temppass-${password}`);
  // const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  // const [checkValidPassword, setCheckValidPassword] = useState(false);

  const setTempPassword = async () => {
    try {
      const response = await publicAxios.post('/auth/sign_in', {
        email,
        password,
      });
      const {access_token} = response.data;
      console.log(response.data);
      authContext.setAuthState({
        access_token,
        // authenticated: true,
        authenticated: false,
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
      // Alert.alert('User is not exist');
      console.log(`error token - ${error.message}`);
    }
  };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    setTempPassword();
    navigation.navigate('SetPassScreen');
  };
  const email = route.params.userEmail ? route.params.userEmail : 'your email';
  return (
    <View style={styles.master}>
      <View style={styles.wrap}>
        <Text style={styles.text}>
          Enter your <Text style={styles.textPass}>temporary password</Text>
        </Text>
        <Text style={styles.textSmall}>Using {email} to log in</Text>

        <View>
          <Text style={styles.textLabel}>Your temporary password</Text>
          <TextInputPassword password={password} setPassword={setPassword} />
        </View>

        {password ? (
          <TouchableOpacity style={styles.btn} onPress={handleOnPasswordlBtn}>
            <Text style={styles.btnText}>CONTINUE</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btnDisable}
            disabled
            onPress={handleOnPasswordlBtn}>
            <Text style={styles.btnTextDisable}>CONTINUE</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default TempPassScreen;

const styles = StyleSheet.create({
  master: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrap: {width: 328, marginHorizontal: 40},
  text: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 16,
    marginTop: 32,
    color: '#1D252D',
    fontFamily: 'TTNorms-Medium',
  },
  textPass: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 16,
    marginTop: 32,
    color: '#DCA114',
    fontFamily: 'TTNorms-Medium',
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 18.88,
    marginBottom: 24,
    color: '#46596D',
    fontFamily: 'TTNorms-Regular',
  },
  btn: {
    width: 328,
    backgroundColor: '#F0B528',
    paddingHorizontal: 122,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 24,
  },
  btnDisable: {
    width: 328,
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 122,
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
