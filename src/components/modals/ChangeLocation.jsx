/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AppText from '../reusableComponents/AppText';

let location = require('../../images/location.png');
let check = require('../../images/Vector@.png');
const CITIES = [
  {city: 'Ukraine'},
  {city: 'Kiyv'},
  {city: 'Lviv'},
  {city: 'Odesa'},
  {city: 'Dnipro'},
  {city: 'Kharkiv'},
  {city: 'Sumy'},
  {city: 'Chernihiv'},
  {city: 'Kherson'},
  {city: 'Rovno'},
  {city: 'Lutsk'},
  {city: 'Mykolaiv'},
];

// const initialState = {
//   activeId: active,
// };

const ChangeLocationModal = ({
  modalVisible,
  setModalVisible,
  setChangeModalVisible,
  changeModalVisible,
  userCity,
}) => {
  const [state, setState] = useState({activeId: 4});
  console.log(state.activeId);
  const prevRef = useRef({activeId: 4});
  console.log(`prev - ${prevRef.current}`);

  useEffect(() => {
    prevRef.current = state.activeId;
  }, [state.activeId]);

  useEffect(() => {
    const findActive = () => {
      for (let i = 0; i < CITIES.length; i += 1) {
        if (CITIES[i].city === userCity) {
          setState({activeId: i});
        }
      }
    };
    findActive();
  }, [userCity]);
  const makeOptionClassName = index => {
    return index === state.activeId ? styles.cityActive : styles.city;
  };

  const changeButton = () => {
    return prevRef.current !== state.activeId
      ? styles.buttonClose
      : styles.buttonDisable;
  };

  const changeText = () => {
    return prevRef.current !== state.activeId
      ? styles.textStyle
      : styles.textStyleDisable;
  };
  const mutate = obj => {
    setState(prevState => {
      if (prevState.activeId === obj.activeId) {
        return prevState;
      }
      return obj;
    });
  };

  const Item = ({town, index}) => (
    <View style={styles.item}>
      <Image source={location} style={styles.iconLocationModal} />
      <TouchableOpacity
        style={styles.title}
        onPress={() => mutate({activeId: index})}>
        <AppText style={makeOptionClassName(index)}>{town}</AppText>
        {index !== state.activeId ? (
          <></>
        ) : (
          <Image source={check} style={styles.checkIcon} />
        )}
      </TouchableOpacity>
    </View>
  );

  const onChangeClick = () => {
    setModalVisible(!modalVisible);
    setChangeModalVisible(!changeModalVisible);
  };

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
              renderItem={({item, index}) => (
                <Item town={item.city} index={index} />
              )}
              keyExtractor={item => item.city}
            />

            <TouchableOpacity style={changeButton()} onPress={onChangeClick}>
              <AppText isBold style={changeText()}>
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
  buttonClose: {
    backgroundColor: '#F0B528',
    marginTop: 20,
    // borderRadius: 4,
    padding: 13,
  },
  buttonDisable: {backgroundColor: '#FFF2D3', marginTop: 20, padding: 13},
  textStyle: {
    color: '#1D252D',
    textAlign: 'center',
  },
  textStyleDisable: {
    color: '#A1A1A1',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 18,
    fontSize: 22,
    lineHeight: 33,
    color: '#1D1B20',
  },
  modalTextActive: {
    fontSize: 25,
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
  city: {
    color: '#1D1B20',
  },
  cityActive: {
    fontWeight: 'bold',
  },
  checkIcon: {
    position: 'absolute',
    right: 20,
    top: 0,
    width: 15,
    height: 15,
  },
});
