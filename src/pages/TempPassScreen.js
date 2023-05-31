import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import usePassword from '../components/showPassword';
const TempPassScreen = ({route}) => {
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const {showPassword, setShowPassword} = usePassword();
  console.log(password);
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
  };

  console.log(token);
  console.log(refreshToken);
  const email = route.params.userEmail ? route.params.userEmail : 'your email';
  return (
    <View style={styles.master}>
      <View>
        <Text style={styles.text}>Enter your temporary password</Text>
        <Text style={styles.textSmall}>Using {email} to log in</Text>
      </View>
      <View>
        <Text style={styles.textLabel}>Your temporary password</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="create password"
          secureTextEntry={showPassword}
          // keyboardType="email-address"
          onChangeText={text => setPassword(text)}
          value={password}
          // onFocus={() => isFocusedPassword(true)}
          // onBlur={() => isFocusedPassword(false)}
        />
        {password ? (
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Feather name="eye" size={23} color={'#49454F'} />
            ) : (
              <Feather name="eye-off" size={23} color={'#49454F'} />
            )}
          </TouchableOpacity>
        ) : (
          <></>
        )}
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
    // marginVertical: 30,
    // marginHorizontal: 30,
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
  input: {
    position: 'relative',
    width: 328,
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#DBDBDB',
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
  eye: {
    position: 'absolute',
    top: 35,
    right: 20,
  },
});
