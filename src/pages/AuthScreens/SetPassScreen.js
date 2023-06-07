/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import TextInputPassword from '../../components/reusableComponents/TextInputPassword';
import AppText from '../../components/reusableComponents/AppText';
import Button from '../../components/reusableComponents/Button';
import {AuthContext} from '../../context/authContext';
import {AxiosContext} from '../../context/axiosContext';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  const {access_token} = authContext.authState;

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

  useEffect(() => {
    const findUserId = async () => {
      try {
        const response = await authAxios.get('/my_profile');
        setUserId(response.data._id);
      } catch (error) {
        console.log(`error my-profile - ${error.message}`);
      }
    };
    findUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSignUp = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await authAxios.post(`/users/${userId}/set_password`, {
        password,
      });
      authContext.setAuthState({access_token, authenticated: true});
    } catch (error) {
      Alert.alert('Invalid password');
      console.log(`error setPass - ${error.message}`);
    }
  };

  const handleOnPasswordlBtn = e => {
    e.preventDefault();
    onSignUp();
  };

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
              <AppText isBold style={styles.text}>
                Set password
              </AppText>
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
                      <AppText style={styles.validTextSuccess}>
                        must be 8 - 24 characters long
                      </AppText>
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
                      <AppText style={styles.validText}>
                        must be 8 - 24 characters long
                      </AppText>
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
                    <AppText style={styles.validTextSuccess}>
                      1 lower case
                    </AppText>
                  </View>
                ) : (
                  <View style={styles.textWrap}>
                    <Entypo
                      name="dot-single"
                      size={28}
                      color={'#D9D9D9'}
                      style={styles.icon}
                    />
                    <AppText style={styles.validText}>1 lower case</AppText>
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
                    <AppText style={styles.validTextSuccess}>
                      1 upper case
                    </AppText>
                  </View>
                ) : (
                  <View style={styles.textWrap}>
                    <Entypo
                      name="dot-single"
                      size={28}
                      color={'#D9D9D9'}
                      style={styles.icon}
                    />
                    <AppText style={styles.validText}>1 upper case</AppText>
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
                      <AppText style={styles.validTextSuccess}>
                        1 special symbol
                      </AppText>
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
                      <AppText style={styles.validText}>
                        1 special symbol
                      </AppText>
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
              <Button
                text="SIGN IN"
                style={styles.btn}
                onPress={handleOnPasswordlBtn}
                styleText={styles.btnText}
              />
            ) : (
              <Button
                text="SIGN IN"
                style={styles.btnDisable}
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
    color: '#1D252D',
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
    paddingHorizontal: 133,
    marginTop: 18,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 133,
    marginTop: 18,
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
  eye: {
    top: 15,
  },
  eyeConf: {
    top: 15,
  },
});
