import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../context/authContext';

const ProfileScreen = () => {
  const authContext = useContext(AuthContext);
  return (
    <View>
      {/* <Text style={styles.text}>Active</Text> */}
      <TouchableOpacity style={styles.btn} onPress={() => authContext.logout()}>
        <Text style={styles.btnText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'TTNorms-Bold',
    fontSize: 22,
    lineHeight: 27,
  },
});
