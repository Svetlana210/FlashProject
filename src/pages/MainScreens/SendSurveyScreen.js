import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/reusableComponents/Button';
import React from 'react';

const SendSurveyScreen = ({navigation}) => {
  return (
    <View style={styles.wrap}>
      <Text>SendSurveyScreen</Text>
      <Button
        style={styles.btn}
        text="GO TO MY SURVEYS"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};

export default SendSurveyScreen;

const styles = StyleSheet.create({
  btn: {width: 173, paddingHorizontal: 14},
  wrap: {
    alignItems: 'center',
  },
});
