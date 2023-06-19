/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import AppText from '../reusableComponents/AppText';
let surveyC = require('../../images/surveyC.png');
let surveyM = require('../../images/surveyM.png');

const HistoryItem = ({title, id, date, status, style}) => {
  return (
    <View style={[styles.listItem, style]}>
      {status === 'Missed' ? (
        <Image source={surveyM} style={styles.img} />
      ) : (
        <Image source={surveyC} style={styles.img} />
      )}

      <AppText isMedium style={styles.text}>
        {title}
      </AppText>
      <AppText style={styles.date}>{date}</AppText>
      <AppText
        isMedium
        style={{
          ...styles.status,
          color: status === false ? '#FF6E5E' : '#6CC44B',
          borderColor: status === false ? '#FF6E5E' : '#6CC44B',
        }}>
        {status === true ? 'Completed' : 'Missed'}
      </AppText>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  listItem: {
    height: 67,
    // marginBottom: 76,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E5EB',
  },
  status: {
    position: 'absolute',
    top: 4,
    right: 0,
    fontSize: 12,
    lineHeight: 14,
    borderWidth: 1,
    borderRadius: 4,
    padding: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 47,
  },
  date: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 14,
    color: '#828B94',
    marginLeft: 47,
  },
  img: {width: 36, height: 36, position: 'absolute', top: 4, left: 0},
});
