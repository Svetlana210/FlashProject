import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {useContext, useRef, useEffect, useState} from 'react';
import AppText from '../../components/reusableComponents/AppText';
import {AxiosContext} from '../../context/axiosContext';

let letter = require('../../images/letter.png');

const CheckEmailScreen = ({route}) => {
  const [time, setTime] = useState(59);
  const timerRef = useRef(time);
  const {publicAxios} = useContext(AxiosContext);

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
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const email = route.params.userEmail ? route.params.userEmail : 'your email';
  return (
    <View style={styles.master}>
      <View style={styles.wrap}>
        <View style={styles.imgWrap}>
          <Image source={letter} style={styles.img} />
        </View>
        <AppText isMedium style={styles.text}>
          Check your email
        </AppText>
        <AppText style={styles.textSmall}>
          We’ve sent an email to
          <AppText isMedium style={styles.textSmallEmail}>
            {' '}
            {email}
          </AppText>{' '}
          with further instructions. If the email doesn’t show up, check your
          spam folder
        </AppText>

        {time === 0 ? (
          <TouchableOpacity style={styles.btn} onPress={handleOnEmailBtn}>
            <AppText isBold style={styles.btnText}>
              RESEND
            </AppText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btnDisable}
            disabled
            onPress={handleOnEmailBtn}>
            <AppText isBols style={styles.btnTextDisable}>
              RESEND IN {time} SECONDS
            </AppText>
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
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 25,
    color: '#46596D',
  },
  textSmallEmail: {
    fontSize: 16,
    lineHeight: 25,
    color: '#46596D',
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
    paddingHorizontal: 75,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 18,
  },
  btnText: {color: '#1D252D', fontSize: 14},
  btnTextDisable: {color: '#A1A1A1', fontSize: 14},
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
