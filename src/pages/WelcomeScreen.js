import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

let logo = require('../images/logoB.png');

const WelcomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.master}>
      <Image source={logo} />
      <Text style={styles.title}>Welcome! </Text>
      <Text style={styles.text}>Quick solution to answer surveys</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('EmailScreen')}>
        <Text style={styles.btnText}>CONTINUE WITH EMAIL</Text>
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
  btnText: {fontFamily: 'TTNorms-Bold', color: '#000000'},
});
