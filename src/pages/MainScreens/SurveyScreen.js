import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';

// import {Image} from 'react-native-elements';

let rect = require('../../images/Rect.png');

const SurveyScreen = ({route}) => {
  const {id, title, amount} = route.params;
  // console.log(title);
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Questions</AppText>
      <View style={styles.wrap}>
        <Image source={rect} style={styles.icon} />
        <Image source={rect} />
        <Image source={rect} />
        <Image source={rect} />
      </View>
      <AppText isBold style={styles.title}>
        Are you okay physically?
      </AppText>
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
    fontSize: 22,
    lineHeight: 26,
    marginVertical: 32,
  },
});
