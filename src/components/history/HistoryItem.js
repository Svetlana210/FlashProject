/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
let surveyC = require('../../images/surveyC.png');
let surveyM = require('../../images/surveyM.png');

const HistoryItem = ({title, id, date, status}) => {
  return (
    <View style={styles.listItem}>
      {status === 'Missed' ? (
        <Image source={surveyM} style={styles.img} />
      ) : (
        <Image source={surveyC} style={styles.img} />
      )}

      <Text style={styles.text}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text
        style={{
          ...styles.status,
          color: status === 'Missed' ? '#FF6E5E' : '#6CC44B',
          borderColor: status === 'Missed' ? '#FF6E5E' : '#6CC44B',
        }}>
        {status}
      </Text>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  listItem: {
    height: 51,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E5EB',
  },
  status: {
    position: 'absolute',
    top: 4,
    right: 0,
    fontFamily: 'TTNorms-Medium',
    fontSize: 12,
    lineHeight: 14,
    borderWidth: 1,
    borderRadius: 4,
    padding: 3,
  },
  text: {
    fontFamily: 'TTNorms-Medium',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 47,
  },
  date: {
    marginTop: 2,
    fontFamily: 'TTNorms-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#828B94',
    marginLeft: 47,
  },
  img: {width: 36, height: 36, position: 'absolute', top: 4, left: 0},
});
