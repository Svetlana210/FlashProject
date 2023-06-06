import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ChangeLocationModal from '../../components/modals/ChangeLocation';
import LogOutModal from '../../components/modals/LogOutModal';
// import {AuthContext} from '../../context/authContext';
let profile = require('../../images/profile.png');
let briefcase = require('../../images/briefcase.png');
let vector = require('../../images/Vector.png');
let sms = require('../../images/sms.png');
let location = require('../../images/location.png');
let vectorAr = require('../../images/VectorAr.png');

const ProfileScreen = () => {
  const [modalLocationVisible, setModalLocationVisible] = useState(false);
  const [modalLogoutVisible, setModalLogoutVisible] = useState(false);

  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>My account</Text>
      <Image source={profile} style={styles.iconProfile} />
      <Text style={styles.textSmall}>Olena Shtokalko</Text>
      <Image source={briefcase} style={styles.iconCase} />
      <Text style={styles.textSmall}>Product designer</Text>
      <Image source={vector} style={styles.iconVector} />
      <Text style={styles.textSmall}>+38 (067) 111-45-55</Text>
      <Image source={sms} style={styles.iconSms} />
      <Text style={styles.textSmall}>olenashtokalko@lasoft.org</Text>
      <Text style={styles.textLocation}>My location</Text>
      <Image source={location} style={styles.iconLocation} />
      <View style={styles.container}>
        <Text style={styles.textSmall}>Lviv</Text>
        <ChangeLocationModal
          modalVisible={modalLocationVisible}
          setModalVisible={setModalLocationVisible}
        />
        <TouchableOpacity
          style={styles.btnChange}
          onPress={() => setModalLocationVisible(true)}>
          <Text style={styles.btnChangeText}>CHANGE</Text>
        </TouchableOpacity>
        <Image source={vectorAr} style={styles.iconArray} />
      </View>
      <LogOutModal
        modalVisible={modalLogoutVisible}
        setModalVisible={setModalLogoutVisible}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setModalLogoutVisible(true)}>
        <Text style={styles.btnText}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'TTNorms-Bold',
    fontSize: 22,
    lineHeight: 33,
    marginTop: 24,
    marginLeft: 16,
  },
  textSmall: {
    fontFamily: 'TTNorms-Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 26,
    marginLeft: 52,
  },
  textLocation: {
    fontFamily: 'TTNorms-Bold',
    fontSize: 22,
    lineHeight: 33,
    marginTop: 40,
    marginLeft: 16,
  },
  iconProfile: {width: 20, height: 20, position: 'absolute', top: 85, left: 16},
  iconCase: {width: 20, height: 20, position: 'absolute', top: 135, left: 16},
  iconVector: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 185,
    left: 16,
  },
  iconSms: {width: 20, height: 20, position: 'absolute', top: 237, left: 16},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconLocation: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 180,
    left: 16,
  },
  iconArray: {position: 'absolute', bottom: 3, right: 20},
  btn: {
    width: 328,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    paddingVertical: 13,
    paddingHorizontal: 125,
    marginTop: 110,
    marginHorizontal: 25,
  },
  btnText: {fontFamily: 'TTNorms-Bold', fontSize: 14, lineHeight: 18},

  btnChangeText: {
    color: '#f0b528',
    fontFamily: 'TTNorms-Bold',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 33,
    marginRight: 35,
  },
});
