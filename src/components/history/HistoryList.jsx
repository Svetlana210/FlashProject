/* eslint-disable no-unused-vars */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState, useCallback, useContext} from 'react';
import HistoryItem from './HistoryItem';

const HistoryList = ({historyList, setHistoryList}) => {
  const renderItem = ({item, index}) => {
    // console.log(index);
    return (
      <>
        {index < 4 ? (
          <HistoryItem
            title={item.name}
            id={item._id}
            date={item.end_date}
            status={item.finished}
            style={styles.item}
          />
        ) : null}
      </>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={historyList}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  item: {marginBottom: 13},
});
