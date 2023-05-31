import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import TextInputPassword from '../components/TextInputPassword';

const TempPassScreen = ({route, navigation}) => {
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  // const {showPassword, setShowPassword} = usePassword();
  console.log(`temppass-${password}`);
  // const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  // const [checkValidPassword, setCheckValidPassword] = useState(false);

  const setTempPassword = async () => {
    try {
      const response = await axios.post(
        'https://qa-api-flash.lasoft.org/api/v1/auth/sign_in',
        {email, password},
      );

      // console.log(response.data);
      setToken(response.data.access_token);
      setRefreshToken(response.data.refresh_token);
      // return response.data.status;
    } catch (error) {
      // Alert.alert('User is not exist');
      console.log(`error - ${error.message}`);
    }
  };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    setTempPassword();
    navigation.navigate('SetPassScreen');
  };

  console.log(`token-${token}`);
  console.log(`refresh -${refreshToken}`);
  const email = route.params.userEmail ? route.params.userEmail : 'your email';
  return (
    <View style={styles.master}>
      <View>
        <Text style={styles.text}>Enter your temporary password</Text>
        <Text style={styles.textSmall}>Using {email} to log in</Text>
      </View>
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
  text: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 16,
    marginTop: 32,
    color: '#1D252D',
    fontFamily: 'TTNorms-Medium',
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 18.88,
    marginBottom: 24,
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
  btnText: {fontFamily: 'TTNorms-Bold', color: '#1D252D'},
  btnTextDisable: {fontFamily: 'TTNorms-Bold', color: '#A1A1A1'},
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
