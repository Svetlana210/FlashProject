import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import AppText from '../reusableComponents/AppText';

const ActiveItem = ({title, amount, date, text, status, navigation}) => {
  return (
    <View style={styles.wrap}>
      <AppText isMedium style={styles.title}>
        {title}
      </AppText>
      <AppText style={styles.text}>{text}</AppText>
      <AppText style={styles.date}>
        {amount} | {date}
      </AppText>
      <AppText isMedium style={styles.status}>
        {status}
      </AppText>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Survey');
        }}>
        <AppText isBold style={styles.btnText}>
          START
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ActiveItem;

const styles = StyleSheet.create({
  wrap: {
    width: 281,
    height: 200,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E5EB',
    backgroundColor: '#ffffff',
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
  },
  date: {
    marginTop: 2,
    fontSize: 12,
    lineHeight: 14,
    color: '#828B94',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 8,
  },
  status: {
    position: 'absolute',
    top: 18,
    right: 10,
    fontSize: 12,
    lineHeight: 14,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: '#F08828',
    borderColor: '#F08828',
  },
  btn: {
    width: 249,
    backgroundColor: '#F0B528',
    paddingHorizontal: 100,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 24,
  },
  btnText: {color: '#1D252D', fontSize: 14},
});
