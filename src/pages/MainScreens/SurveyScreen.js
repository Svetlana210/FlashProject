import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
// import {Image} from 'react-native-elements';

let rect = require('../../images/Rect.png');

const SurveyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Questions</Text>
      <View style={styles.wrap}>
        <Image source={rect} style={styles.icon} />
        <Image source={rect} />
        <Image source={rect} />
        <Image source={rect} />
      </View>
      <Text style={styles.title}>Are you okay physically?</Text>
    </View>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  text: {
    fontFamily: 'TTNorms-Regular',
    fontSize: 14,
    lineHeight: 17,
    color: '#828B94',
    marginBottom: 8,
  },
  wrap: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    tintColor: '#FDF7E7',
  },
  title: {
    fontFamily: 'TTNorms-Bold',
    fontSize: 22,
    lineHeight: 26,
    marginVertical: 32,
  },
});
