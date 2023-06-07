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
  const [modalLoadVisible, setModalLoadVisible] = useState(true);
  console.log(`modal1 ${modalLoadVisible}`);

  const logOut = async () => {
    setStatus('loading');
    setModalLoadVisible(true);
    try {
      const response = await authAxios.post('/logout/access', {id});
      console.log(response);
      setModalLoadVisible(false);
      authContext.setAuthState({
        access_token: null,
        // authenticated: true,
        authenticated: false,
      });

      //   setModalLoadVisible(false);
      await AsyncStorage.removeItem('token');

      setStatus('success');
      console.log(`modal2 ${modalLoadVisible}`);
    } catch (error) {
      setStatus('error');
      console.log(`error token - ${error.message}`);
    }
  };
  if (status === 'loading') {
    // return (
    //   <Loading
    //     modalLoadVisible={modalLoadVisible}
    //     setModalLoadVisible={setModalLoadVisible}
    //   />
    // );
    return (
      <View style={styles.wrapper}>
        <Text style={styles.loader}>Logging you out...</Text>
      </View>
    );
  }
  //   if (authContext.authState.authenticated === 'false') {
  //     setModalLoadVisible(false);
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
              {/* {status === 'loading' && (
                <Loading
                  modalLoadVisible={modalLoadVisible}
                  setModalLoadVisible={setModalLoadVisible}
                />
              )} */}
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
  wrapper: {
    width: 312,
    height: 69,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#DBDBDB',
    paddingTop: 23,
    paddingLeft: 20,
    // paddingVertical: 30,
    // paddingHorizontal: 100,
    position: 'absolute',
    top: 170,
    left: 40,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // boxShadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  },
  loader: {fontSize: 17, fontFamily: 'TTNorms-Medium'},
});
