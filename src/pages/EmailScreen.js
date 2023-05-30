import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmailScreen = ({navigation, route}) => {
  return (
    <View style={styles.master}>
      <Text style={styles.text}>EmailScreen</Text>
    </View>
  );
};
export default EmailScreen;

const styles = StyleSheet.create({
  master: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 30,
    // marginHorizontal: 30,
  },
  text: {
    fontSize: 26,

    marginBottom: 20,
  },
});
