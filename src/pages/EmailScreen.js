import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const EmailScreen = ({navigation, route}) => {
  return (
    <View style={styles.master}>
      <Text style={styles.text}>Enter your work email address</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('EmailScreen')}>
        <Text style={styles.btnText}>CONTINUE WITH EMAIL</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EmailScreen;

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
    marginBottom: 24,
    marginTop: 32,
    // marginLeft: 16,
    fontFamily: 'TTNorms-Medium',
  },
  btn: {
    backgroundColor: '#F0B528',
    marginTop: 32,
    paddingHorizontal: 79.5,
    paddingVertical: 13,
    borderRadius: 4,
  },
  btnText: {fontFamily: 'TTNorms-Bold', color: '#000000'},
});
