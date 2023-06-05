import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import GoBackBtn from '../shared/GoBackBtn';
let logo = require('../../images/logoS.jpg');

const HeaderAuth = () => {
  return (
    <View style={styles.container}>
      <GoBackBtn />
      <Image source={logo} style={styles.logo} />
      {/* <Text>{props.name}</Text> */}
    </View>
  );
};

export default HeaderAuth;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 70,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#d5d2d6',
  },
  logo: {position: 'absolute', top: 35, right: 20},
});
