import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';
import Button from '../../components/reusableComponents/Button';

let logo = require('../../images/logoB.png');

const WelcomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.master}>
      <Image source={logo} />
      <AppText isMedium style={styles.title}>
        Welcome!
      </AppText>
      <AppText style={styles.text}>Quick solution to answer surveys</AppText>
      <Button
        text="CONTINUE WITH EMAIL"
        style={styles.btn}
        onPress={() => navigation.navigate('EmailScreen')}
      />
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
});
