import {StyleSheet, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../reusableComponents/AppText';

const ApproveLocationModal = ({setChangeModalVisible, changeModalVisible}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={changeModalVisible}
        onRequestClose={() => {
          setChangeModalVisible(!changeModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText isBold style={styles.modalText}>
              Location changes
            </AppText>
            <AppText isMedium style={styles.modalTextSmall}>
              After the HR manager updates your location in the system, the
              changes will reflect in the app automatically
            </AppText>
            <View style={styles.wrap}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setChangeModalVisible(!changeModalVisible)}>
                <AppText isBold style={styles.textStyle}>
                  OK
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ApproveLocationModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    marginTop: 22,
  },
  modalView: {
    height: 260,
    width: 280,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    padding: 15,

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
    width: 232,
    borderRadius: 4,
    padding: 11,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#F0B528',
    marginTop: 24,
  },
  textStyle: {
    color: '#1D252D',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 33,
  },
  modalTextSmall: {
    color: '#828B94',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
