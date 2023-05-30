import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.master}>
      <Text style={styles.text}>Welcome screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EmailScreen')}>
        <Text style={styles.btn}>continue with email</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 26,

    marginBottom: 20,
  },
  smallText: {fontSize: 17},
});
