/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import ChangeLocationModal from '../../components/modals/ChangeLocation';
import LogOutModal from '../../components/modals/LogOutModal';
import AppText from '../../components/reusableComponents/AppText';
import Button from '../../components/reusableComponents/Button';
import ApproveLocationModal from '../../components/modals/ApproveLocation';
import {AxiosContext} from '../../context/axiosContext';

let profile = require('../../images/profile.png');
let briefcase = require('../../images/briefcase.png');
let vector = require('../../images/Vector.png');
let sms = require('../../images/sms.png');
let location = require('../../images/location.png');
let vectorAr = require('../../images/VectorAr.png');

const ProfileScreen = () => {
  const [modalLocationVisible, setModalLocationVisible] = useState(false);
  const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
  const [changeModalVisible, setChangeModalVisible] = useState(false);

  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);

  const {findUser} = useContext(AxiosContext);

  useEffect(() => {
    findUser().then(setUserInfo);
  }, []);

  return (
    <View style={styles.wrap}>
      <AppText isBold style={styles.text}>
        My account
      </AppText>
      <Image source={profile} style={styles.iconProfile} />
      <AppText style={styles.textSmall}>{userInfo.full_name}</AppText>
      <Image source={briefcase} style={styles.iconCase} />
      <AppText style={styles.textSmall}>{userInfo.role}</AppText>
      <Image source={vector} style={styles.iconVector} />
      <AppText style={styles.textSmall}>{userInfo.phone_number}</AppText>
      <Image source={sms} style={styles.iconSms} />
      <AppText style={styles.textSmall}>{userInfo.email}</AppText>
      <AppText isBold style={styles.textLocation}>
        My location
      </AppText>
      <Image source={location} style={styles.iconLocation} />
      <View style={styles.container}>
        <AppText style={styles.textSmall}>{userInfo.location}</AppText>
        <ChangeLocationModal
          modalVisible={modalLocationVisible}
          setModalVisible={setModalLocationVisible}
          changeModalVisible={changeModalVisible}
          setChangeModalVisible={setChangeModalVisible}
          userCity={userInfo.city}
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
      <ApproveLocationModal
        changeModalVisible={changeModalVisible}
        setChangeModalVisible={setChangeModalVisible}
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
  wrap: {backgroundColor: '#FAFAFA', paddingBottom: 69},
  text: {
    fontSize: 22,
    lineHeight: 33,
    marginTop: 24,
    marginLeft: 16,
    color: '#1D1B20',
  },
  textSmall: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 26,
    marginLeft: 52,
    color: '#1D1B20',
  },
  textLocation: {
    fontSize: 22,
    lineHeight: 33,
    marginTop: 40,
    marginLeft: 16,
    color: '#1D1B20',
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
    bottom: 244,
    left: 16,
  },
  iconArray: {position: 'absolute', bottom: 3, right: 20},
  btn: {
    height: 44,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#ffffff',
    // paddingVertical: 15,
    paddingHorizontal: 128,
    marginTop: 85,
    marginHorizontal: 25,
  },
  btnText: {
    position: 'absolute',
    top: 10,
    left: 135,
  },
  btnChangeText: {
    color: '#f0b528',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 31,
    marginRight: 38,
  },
});
