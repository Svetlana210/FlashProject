/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../reusableComponents/AppText';

const CITIES = [
  {id: 0, city: 'Ukraine'},
  {id: 1, city: 'Kiyv'},
  {id: 2, city: 'Lviv'},
  {id: 3, city: 'Odesa'},
  {id: 4, city: 'Dnipro'},
  {id: 5, city: 'Kharkiv'},
  {id: 6, city: 'Sumy'},
  {id: 7, city: 'Chernihiv'},
  {id: 8, city: 'Kherson'},
  {id: 9, city: 'Rovno'},
  {id: 10, city: 'Lutsk'},
  {id: 11, city: 'Mykolaiv'},
];

let location = require('../../images/location.png');

const ChangeLocationModal = ({modalVisible, setModalVisible}) => {
  const [active, setActive] = useState(false);

  const Item = ({city}) => (
    <View style={styles.item}>
      <Image source={location} style={styles.iconLocationModal} />
      <TouchableOpacity
        style={styles.title}
        onPress={() => {
          setActive(!active);
        }}>
        <AppText>{city}</AppText>
      </TouchableOpacity>
    </View>
  );

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
            <AppText isBold style={styles.modalText}>
              Change location{' '}
            </AppText>

            <FlatList
              data={CITIES}
              renderItem={({item}) => <Item city={item.city} />}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <AppText isBold style={styles.textStyle}>
                SAVE
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChangeLocationModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: 417,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
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
    borderRadius: 4,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#FFF2D3',
    marginTop: 20,
  },
  textStyle: {
    color: '#A1A1A1',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 18,
    fontSize: 22,
    lineHeight: 33,
  },
  iconLocationModal: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 30,
    left: 5,
  },
  title: {
    marginBottom: 28,
    marginLeft: 38,
    fontSize: 16,
    lineHeight: 24,
  },
  item: {
    marginTop: 5,
  },
});
