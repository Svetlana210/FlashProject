/* eslint-disable no-unused-vars */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ActiveItem from './ActiveItem';
const initialState = [
  {
    title: 'Survey 1',
    date: '12 Feb,12:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '4 Questions',
    id: 1,
    status: 'New',
  },
  {
    title: 'Survey 2',
    date: '10 Feb,11:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '2 Questions',
    id: 2,
    status: 'New',
  },
  {
    title: 'Survey 3',
    date: '09 Feb,10:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '5 Questions',
    id: 3,
    status: 'New',
  },
];
const ActiveList = ({navigation}) => {
  const [list, setList] = useState(initialState);
  // console.log(list);

  const renderItem = ({item, index}) => {
    return (
      <ActiveItem
        title={item.title}
        date={item.date}
        status={item.status}
        text={item.text}
        amount={item.amount}
        navigation={navigation}
        index={index}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ActiveList;

const styles = StyleSheet.create({});
