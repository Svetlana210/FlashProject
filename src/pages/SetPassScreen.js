import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SetPassScreen = () => {
  return (
    <View style={styles.master}>
      <Text style={styles.text}>SetPassScreen</Text>
    </View>
  );
};
export default SetPassScreen;

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
