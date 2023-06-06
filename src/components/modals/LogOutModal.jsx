import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../../context/authContext';
import {AxiosContext} from '../../context/axiosContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './Loading';

const LogOutModal = ({modalVisible, setModalVisible}) => {
  const authContext = useContext(AuthContext);
  const {authAxios} = useContext(AxiosContext);
  const [status, setStatus] = useState(null);
  const id = Math.random();

  const logOut = async () => {
    setStatus('loading');

    try {
      const response = await authAxios.post('/logout/access', {id});
      console.log(response);
      authContext.setAuthState({
        access_token: null,
        // authenticated: true,
        authenticated: false,
      });

      await AsyncStorage.removeItem('token');
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.log(`error token - ${error.message}`);
    }
  };
  if (status === 'loading') {
    // return <Loading status={status} />;
    return <Text>Loading</Text>;
  }
  //   if (status === 'success') {
  //     return <></>;
  //   }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Log out </Text>
            <Text style={styles.modalTextSmall}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.wrap}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => logOut()}>
                <Text style={styles.textStyle}>LOG OUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LogOutModal;

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
