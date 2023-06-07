/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HistoryList from '../../components/history/HistoryList';
import ActiveList from '../../components/activeSurveys/ActiveList.jsx';
let env = require('../../images/Env.png');

const HomeScreen = ({navigation}) => {
  // const [active, setActive] = useState(false);
  const [active, setActive] = useState(true);

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <Text style={styles.title}>Active</Text>
        {active ? (
          <View style={styles.imageWrapper}>
            <ActiveList navigation={navigation} />
          </View>
        ) : (
          <View style={styles.imageWrapper}>
            <Image source={env} style={styles.img} />
            <Text style={styles.text}>No Active Surveys</Text>
            <Text style={styles.textSmall}>New survey will appear here</Text>
          </View>
        )}

        <View style={styles.historyWrapper}>
          <Text style={styles.title}>History</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('History')}>
            <Text style={styles.btnAll}>SEE ALL</Text>
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
    fontFamily: 'TTNorms-Bold',
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
    fontFamily: 'TTNorms-Medium',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  textSmall: {
    color: '#828B94',
    fontFamily: 'TTNorms-Regular',
    fontSize: 14,
    lineHeight: 21,
  },
  btnAll: {
    color: '#f0b528',
    fontFamily: 'TTNorms-Bold',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 35,
  },
});
