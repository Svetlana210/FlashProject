import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const GoBackBtn = ({style}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      navigation={navigation}
      onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={23} color={'#49454F'} />
    </TouchableOpacity>
  );
};
export default GoBackBtn;
const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 35,
    left: 18,
  },
});
