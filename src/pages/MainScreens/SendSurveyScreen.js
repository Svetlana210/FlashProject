import {StyleSheet, Image, View} from 'react-native';
import Button from '../../components/reusableComponents/Button';
import React from 'react';
import AppText from '../../components/reusableComponents/AppText';
let survey = require('../../images/survey.png');
const SendSurveyScreen = ({navigation}) => {
  return (
    <View style={styles.master}>
      <View style={styles.wrap}>
        <View style={styles.imgWrap}>
          <Image source={survey} style={styles.img} />
        </View>
        <AppText isBold style={styles.text}>
          Survey sent!
        </AppText>
        <AppText isMedium style={styles.textSmall}>
          Thanks for sharing your feedback
        </AppText>
        <Button
          style={styles.btn}
          text="GO TO MY SURVEYS"
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </View>
  );
};

export default SendSurveyScreen;

const styles = StyleSheet.create({
  btn: {width: 173, paddingHorizontal: 14},
  wrap: {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: 50,
    paddingBottom: 205,
  },
  img: {
    width: 160,
    height: 160,
    marginBottom: 32,
  },
  text: {
    fontSize: 22,
    lineHeight: 33,
    marginBottom: 16,
  },
  textSmall: {
    color: '#828B94',
    fontSize: 16,
    lineHeight: 24,
  },
});
