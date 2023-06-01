import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/authContext';

const HomeScreen = () => {
  const authContext = useContext(AuthContext);
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => authContext.logout()}>
        <Text style={styles.btnText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
