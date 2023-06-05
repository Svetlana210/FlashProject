/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
// import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import TextInputPassword from '../../components/shared/TextInputPassword';

import {AuthContext} from '../../context/authContext';

import {AxiosContext} from '../../context/axiosContext';

const SetPassScreen = ({route, navigation}) => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [userId, setUserId] = useState('');

  const [lowerValidate, setLowerValidate] = useState(false);
  const [upperValidate, setUpperValidate] = useState(false);
  const [symbolValidate, setSymbolValidate] = useState(false);
  const [lengthValidate, setLengthValidate] = useState(false);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  const authContext = useContext(AuthContext);
  const {authAxios} = useContext(AxiosContext);
  // console.log(authAxios);

  const {access_token} = authContext.authState;
  // console.log(authContext.authState.access_token);

  const handleChange = value => {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#$%^&*])');
    const length = new RegExp('(?=.{8,24})');

    setPassword(value);

    if (lower.test(value)) {
      setLowerValidate(true);
    } else {
      setLowerValidate(false);
    }
    if (upper.test(value)) {
      setUpperValidate(true);
    } else {
      setUpperValidate(false);
    }
    if (number.test(value) && special.test(value)) {
      setSymbolValidate(true);
    } else {
      setSymbolValidate(false);
    }
    if (length.test(value)) {
      setLengthValidate(true);
    } else {
      setLengthValidate(false);
    }
  };
  // console.log(password);

  useEffect(() => {
    const findUserId = async () => {
      try {
        const response = await authAxios.get('/my_profile');
        setUserId(response.data._id);
        // console.log(response.data._id);
      } catch (error) {
        console.log(`error my-profile - ${error.message}`);
      }
    };
    findUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(userId);
  const onSignUp = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await authAxios.post(`/users/${userId}/set_password`, {
        password,
      });
      authContext.setAuthState({access_token, authenticated: true});
      // console.log(response);
    } catch (error) {
      Alert.alert('Invalid password');
      console.log(`error setPass - ${error.message}`);
    }
  };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    onSignUp();
    // setTempPassword();
    // navigation.navigate('HomeScreen');
  };

  // console.log(token);
  // console.log(refreshToken);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerWrap}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.master}>
          <View style={{...styles.wrap, marginTop: showKeyboard ? 15 : 0}}>
            {showKeyboard ? (
              <></>
            ) : (
              <Text style={styles.text}>Set password</Text>
            )}

            <View styles={styles.container}>
              <TextInputPassword
                password={password}
                setPassword={handleChange}
                setShowKeyboard={setShowKeyboard}
                style={styles.eye}
                text="create password"
              />
              <View>
                {lengthValidate ? (
                  <>
                    <View style={styles.textWrap}>
                      <AntDesign
                        name="checkcircle"
                        size={18}
                        color={'#29988B'}
                        style={styles.iconGreen}
                      />
                      <Text style={styles.validTextSuccess}>
                        must be 8 - 24 characters long
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.textWrap}>
                      <Entypo
                        name="dot-single"
                        size={28}
                        color={'#D9D9D9'}
                        style={styles.icon}
                      />
                      <Text style={styles.validText}>
                        must be 8 - 24 characters long
                      </Text>
                    </View>
                  </>
                )}
                {lowerValidate ? (
                  <View style={styles.textWrap}>
                    <AntDesign
                      name="checkcircle"
                      size={18}
                      color={'#29988B'}
                      style={styles.iconGreen}
                    />
                    <Text style={styles.validTextSuccess}>1 lower case</Text>
                  </View>
                ) : (
                  <View style={styles.textWrap}>
                    <Entypo
                      name="dot-single"
                      size={28}
                      color={'#D9D9D9'}
                      style={styles.icon}
                    />
                    <Text style={styles.validText}>1 lower case</Text>
                  </View>
                )}

                {upperValidate ? (
                  <View style={styles.textWrap}>
                    <AntDesign
                      name="checkcircle"
                      size={18}
                      color={'#29988B'}
                      style={styles.iconGreen}
                    />
                    <Text style={styles.validTextSuccess}>1 upper case</Text>
                  </View>
                ) : (
                  <View style={styles.textWrap}>
                    <Entypo
                      name="dot-single"
                      size={28}
                      color={'#D9D9D9'}
                      style={styles.icon}
                    />
                    <Text style={styles.validText}>1 upper case</Text>
                  </View>
                )}

                {symbolValidate ? (
                  <>
                    <View style={styles.textWrap}>
                      <AntDesign
                        name="checkcircle"
                        size={18}
                        color={'#29988B'}
                        style={styles.iconGreen}
                      />
                      <Text style={styles.validTextSuccess}>
                        1 special symbol
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.textWrap}>
                      <Entypo
                        name="dot-single"
                        size={28}
                        color={'#D9D9D9'}
                        style={styles.icon}
                      />
                      <Text style={styles.validText}>1 special symbol</Text>
                    </View>
                  </>
                )}
              </View>
              <View style={styles.wrapperConfirm}>
                <TextInputPassword
                  password={confirmPassword}
                  setPassword={setConfirmPassword}
                  setShowKeyboard={setShowKeyboard}
                  style={styles.eyeConf}
                  text="confirm password"
                />
              </View>
            </View>

            {password === confirmPassword && password ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={handleOnPasswordlBtn}>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  containerWrap: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  validText: {color: '#828B94', fontSize: 14, marginLeft: 28},
  validTextSuccess: {color: '#29988B', marginLeft: 28},
  textWrap: {position: 'relative', marginTop: 8, marginBottom: 4},
  icon: {position: 'absolute', bottom: -6},
  iconGreen: {position: 'absolute', bottom: -1},
  wrapperConfirm: {marginTop: 16},
  btn: {
    backgroundColor: '#F0B528',
    paddingHorizontal: 133,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 18,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 133,
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
  eye: {
    top: 15,
  },
  eyeConf: {
    top: 15,
  },
});