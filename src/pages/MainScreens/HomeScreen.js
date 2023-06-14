/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import HistoryList from '../../components/history/HistoryList';
import ActiveList from '../../components/activeSurveys/ActiveList.jsx';
import AppText from '../../components/reusableComponents/AppText';
import {AxiosContext} from '../../context/axiosContext';
let env = require('../../images/Env.png');

const HomeScreen = ({navigation}) => {
  // const [active, setActive] = useState(false);
  const [active, setActive] = useState(true);
  const [list, setList] = useState([]);
  const {getActiveSurveys, findUser} = useContext(AxiosContext);
  // console.log(list);

  useEffect(() => {
    findUser();
  }, []);

  useEffect(() => {
    getActiveSurveys().then(setList);
  }, [getActiveSurveys]);

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <AppText isBold style={styles.title}>
          Active
        </AppText>
        {active ? (
          <View style={styles.imageWrapper}>
            <ActiveList navigation={navigation} list={list} />
          </View>
        ) : (
          <View style={styles.imageWrapper}>
            <Image source={env} style={styles.img} />
            <AppText isMedium style={styles.text}>
              No Active Surveys
            </AppText>
            <AppText style={styles.textSmall}>
              New survey will appear here
            </AppText>
          </View>
        )}

        <View style={styles.historyWrapper}>
          <AppText isBold style={styles.title}>
            History
          </AppText>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('History')}>
            <AppText isBold style={styles.btnAll}>
              SEE ALL
            </AppText>
          </TouchableOpacity>
        </View>
        <HistoryList />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrap: {flex: 1, backgroundColor: '#FAFAFA'},
  container: {marginHorizontal: 20},
  title: {
    fontSize: 22,
    lineHeight: 27,
    color: '#000000',
    marginTop: 24,
    marginBottom: 16,
  },
  imageWrapper: {
    height: 200,
    textAlign: 'center',
    alignItems: 'center',
  },
  img: {
    width: 128,
    height: 128,
  },
  historyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  textSmall: {
    color: '#828B94',
    fontSize: 14,
    lineHeight: 21,
  },
  btnAll: {
    color: '#f0b528',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 35,
  },
});
