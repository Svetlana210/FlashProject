import React, {useState, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import ChangeLocationModal from '../../components/modals/ChangeLocation';
import LogOutModal from '../../components/modals/LogOutModal';
import AppText from '../../components/reusableComponents/AppText';
import Button from '../../components/reusableComponents/Button';
import {AxiosContext} from '../../context/axiosContext';

let profile = require('../../images/profile.png');
let briefcase = require('../../images/briefcase.png');
let vector = require('../../images/Vector.png');
let sms = require('../../images/sms.png');
let location = require('../../images/location.png');
let vectorAr = require('../../images/VectorAr.png');

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [tel, setTel] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [modalLocationVisible, setModalLocationVisible] = useState(false);
  const [modalLogoutVisible, setModalLogoutVisible] = useState(false);

  const {authAxios} = useContext(AxiosContext);

  const findUserId = async () => {
    try {
      const response = await authAxios.get('/my_profile');
      console.log(response.data);
      setName(response.data.full_name);
      setCity(response.data.location);
      setEmail(response.data.email);
      setTel(response.data.phone_number);
      setRole(response.data.role);
    } catch (error) {
      console.log(`error my-profile - ${error.message}`);
    }
  };
  findUserId();

  return (
    <View style={styles.wrap}>
      <AppText isBold style={styles.text}>
        My account
      </AppText>
      <Image source={profile} style={styles.iconProfile} />
      <AppText style={styles.textSmall}>{name}</AppText>
      <Image source={briefcase} style={styles.iconCase} />
      <AppText style={styles.textSmall}>{role}</AppText>
      <Image source={vector} style={styles.iconVector} />
      <AppText style={styles.textSmall}>{tel}</AppText>
      <Image source={sms} style={styles.iconSms} />
      <AppText style={styles.textSmall}>{email}</AppText>
      <AppText isBold style={styles.textLocation}>
        My location
      </AppText>
      <Image source={location} style={styles.iconLocation} />
      <View style={styles.container}>
        <AppText style={styles.textSmall}>{city}</AppText>
        <ChangeLocationModal
          modalVisible={modalLocationVisible}
          setModalVisible={setModalLocationVisible}
        />
        <TouchableOpacity
          style={styles.btnChange}
          onPress={() => setModalLocationVisible(true)}>
          <AppText isBold style={styles.btnChangeText}>
            CHANGE
          </AppText>
        </TouchableOpacity>
        <Image source={vectorAr} style={styles.iconArray} />
      </View>
      <LogOutModal
        modalVisible={modalLogoutVisible}
        setModalVisible={setModalLogoutVisible}
      />
      <Button
        text="LOG OUT"
        style={styles.btn}
        styleText={styles.btnText}
        onPress={() => {
          setModalLogoutVisible(true);
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  wrap: {backgroundColor: '#ffffff', paddingBottom: 37},
  text: {
    fontSize: 22,
    lineHeight: 33,
    marginTop: 24,
    marginLeft: 16,
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 26,
    marginLeft: 52,
  },
  textLocation: {
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
    bottom: 217,
    left: 16,
  },
  iconArray: {position: 'absolute', bottom: 3, right: 20},
  btn: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#ffffff',
    paddingHorizontal: 128,
    marginTop: 110,
    marginHorizontal: 25,
  },

  btnChangeText: {
    color: '#f0b528',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 31,
    marginRight: 35,
  },
});
