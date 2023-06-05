import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ActiveItem = ({title, id, amount, date, text, status, navigation}) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.date}>
        {amount} | {date}
      </Text>
      <Text style={styles.status}>{status}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Survey');
        }}>
        <Text style={styles.btnText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActiveItem;

const styles = StyleSheet.create({
  wrap: {
    width: 323,
    height: 200,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E5EB',
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'TTNorms-Medium',
    fontSize: 16,
    lineHeight: 24,
    // marginLeft: 47,
  },
  date: {
    marginTop: 2,
    fontFamily: 'TTNorms-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#828B94',
    // marginLeft: 47,
  },
  text: {
    fontFamily: 'TTNorms-Regular',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 8,
  },
  status: {
    position: 'absolute',
    top: 18,
    right: 10,
    fontFamily: 'TTNorms-Medium',
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
    width: 292,
    backgroundColor: '#F0B528',
    paddingHorizontal: 122,
    paddingVertical: 13,
    borderRadius: 4,
    marginTop: 24,
  },
  btnText: {fontFamily: 'TTNorms-Bold', color: '#1D252D', fontSize: 14},
});
