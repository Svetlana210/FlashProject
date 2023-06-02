import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import {AxiosContext} from '../context/axiosContext';
let letter = require('../images/letter.png');
const CheckEmailScreen = ({route}) => {
  const {publicAxios} = useContext(AxiosContext);

  const sendEmail = async () => {
    try {
      const response = await publicAxios.post('/auth/password_recovery', {
        email,
      });
      console.log(response);
      // return response.data.status;
    } catch (error) {
      // Alert.alert('User is not exist');
      console.log(`error - ${error.message}`);
    }
  };

  const handleOnEmailBtn = e => {
    e.preventDefault();
    sendEmail();
  };
  const email = route.params.userEmail ? route.params.userEmail : 'your email';
  return (
    <View style={styles.master}>
      <View style={styles.wrap}>
        <View style={styles.imgWrap}>
          <Image source={letter} style={styles.img} />
        </View>
        <Text style={styles.text}>Check your email</Text>
        <Text style={styles.textSmall}>
          We’ve sent an email to
          <Text style={styles.textSmallEmail}> {email}</Text> with further
          instructions. If the email doesn’t show up, check your spam folder
        </Text>

        {email ? (
          <TouchableOpacity style={styles.btn} onPress={handleOnEmailBtn}>
            <Text style={styles.btnText}>RESEND</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btnDisable}
            disabled
            onPress={handleOnEmailBtn}>
            <Text style={styles.btnTextDisable}>RESEND</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CheckEmailScreen;

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
  img: {width: 120, height: 105},
  imgWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
  },
  text: {
    fontSize: 32,
    lineHeight: 38.4,
    marginBottom: 15,
    marginTop: 32,
    color: '#1D252D',
    fontFamily: 'TTNorms-Medium',
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 25,
    color: '#46596D',
    fontFamily: 'TTNorms-Regular',
  },
  textSmallEmail: {
    fontSize: 16,
    lineHeight: 25,
    color: '#46596D',
    fontFamily: 'TTNorms-Medium',
  },
  btn: {
    width: 330,
    backgroundColor: '#F0B528',
    paddingHorizontal: 130,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 24,
  },
  btnDisable: {
    backgroundColor: '#FFF2D3',
    paddingHorizontal: 130,
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
