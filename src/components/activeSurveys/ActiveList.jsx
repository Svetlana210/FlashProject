/* eslint-disable no-unused-vars */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ActiveItem from './ActiveItem';

const ActiveList = ({navigation, list}) => {
  // console.log(list);
  // const [items, setItems] = useState(initialState);
  const renderItem = ({item, index}) => {
    return (
      <ActiveItem
        title={item.name}
        date={item.created_at}
        text={item.description}
        amount={item.amount}
        navigation={navigation}
        index={index}
        surveyId={item._id}
        questionsMy={item.questions}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default ActiveList;

const styles = StyleSheet.create({});
