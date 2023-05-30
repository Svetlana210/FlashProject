import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.master}>
      <Text style={styles.text}>SignInScreen</Text>
    </View>
  );
};
export default SignInScreen;

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
});
