/* eslint-disable no-unused-vars */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ActiveItem from './ActiveItem';
const initialState = [
  {
    title: 'Survey 1',
    date: '12 Feb,12:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '5 Questions',
    id: 1,
    status: 'New',
  },
  {
    title: 'Survey 2',
    date: '12 Feb,12:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '5 Questions',
    id: 2,
    status: 'New',
  },
  {
    title: 'Survey 3',
    date: '12 Feb,12:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '5 Questions',
    id: 3,
    status: 'New',
  },
];
const ActiveList = ({navigation}) => {
  const [list, setList] = useState(initialState);
  console.log(list);

  const renderItem = itemData => {
    return (
      <ActiveItem
        title={itemData.item.title}
        date={itemData.item.date}
        status={itemData.item.status}
        text={itemData.item.text}
        amount={itemData.item.amount}
        navigation={navigation}
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
