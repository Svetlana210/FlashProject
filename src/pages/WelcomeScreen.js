import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AppText from '../components/AppText';

let logo = require('../images/logoB.png');

const WelcomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.master}>
      <Image source={logo} />
      {/* <Text style={styles.title}>Welcome! </Text> */}
      <AppText isMedium style={styles.title}>
        Welcome!
      </AppText>
      <AppText style={styles.text}>Quick solution to answer surveys</AppText>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('EmailScreen')}>
        <AppText isBold style={styles.btnText}>
          CONTINUE WITH EMAIL
        </AppText>
      </TouchableOpacity>
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  master: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 210,
    // marginHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontFamily: 'TTNorms-Medium',
    lineHeight: 38.4,
    marginTop: 65,
    marginBottom: 7,
    color: '#000000',
  },
  text: {fontSize: 16, lineHeight: 24, color: '#46596D'},
  btn: {
    backgroundColor: '#F0B528',
    marginTop: 32,
    paddingHorizontal: 79.5,
    paddingVertical: 13,
    borderRadius: 4,
  },
  btnText: {color: '#000000'},
});
