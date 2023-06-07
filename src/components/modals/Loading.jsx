import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
// import {AuthContext} from '../../context/authContext';
// import {AxiosContext} from '../../context/axiosContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Loading = ({status, modalLoadVisible, setModalLoadVisible}) => {
  console.log(`modal3 ${modalLoadVisible}`);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        // transparent={true}
        visible={modalLoadVisible}
        // onRequestClose={() => {
        //   setModalLoadVisible(!modalLoadVisible);
        //       }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextSmall}>Logging you out...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    height: 177,
    width: 312,
    backgroundColor: 'white',

    borderRadius: 4,
    padding: 18,
    // paddingHorizontal: 16,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 98,
    borderRadius: 4,
    padding: 13,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#F0B528',
    marginTop: 20,
  },
  textStyle: {
    color: '#1D252D',
    fontFamily: 'TTNorms-Bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 8,
    fontFamily: 'TTNorms-Bold',
    fontSize: 22,
    lineHeight: 33,
  },
  modalTextSmall: {
    marginBottom: 15,
    fontFamily: 'TTNorms-Regular',
    fontSize: 14,
    lineHeight: 21,
  },
  wrap: {flexDirection: 'row', gap: 10, justifyContent: 'flex-end'},
});
