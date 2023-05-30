import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const GoBackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      navigation={navigation}
      onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={23} color={'#49454F'} />
    </TouchableOpacity>
  );
};
export default GoBackBtn;
