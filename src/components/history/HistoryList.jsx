import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import HistoryItem from './HistoryItem';
const initialState = [
  {title: 'Survey 1', date: '12 Feb,12:00', status: 'Completed', id: 1},
  {title: 'Survey 2', date: '10 Feb,11:00', status: 'Missed', id: 2},
  {title: 'Survey 3', date: '09 Feb,11:00', status: 'Missed', id: 3},
  {title: 'Survey 4', date: '07 Feb,12:00', status: 'Completed', id: 4},
  //   {title: 'Survey 5', date: '05 Feb,10:30', status: 'Completed', id: 5},
  //   {title: 'Survey 6', date: '05 Feb,09:30', status: 'Completed', id: 6},
];
const HistoryList = () => {
  const [surveys, setSurveys] = useState(initialState);

  const renderItem = itemData => {
    return (
      <HistoryItem
        title={itemData.item.title}
        id={itemData.item.id}
        date={itemData.item.date}
        status={itemData.item.status}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={surveys} renderItem={renderItem} />
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({});
