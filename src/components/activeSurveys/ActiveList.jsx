/* eslint-disable no-unused-vars */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ActiveItem from './ActiveItem';
const initialState = [
  {
    name: 'Survey 1',
    created_at: '12 Feb,12:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '2',
    _id: 1,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
    ],
  },
  {
    name: 'Survey 2',
    created_at: '10 Feb,11:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '4',
    _id: 2,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Do you need help or support?',
        id: 3,
        positive: 'I am ok for now',
        negative: 'Please contact me',
      },
      {
        text: 'Are you changing your location?',
        id: 4,
        positive: 'On-track',
        negative: 'Off-track',
      },
    ],
  },
  {
    name: 'Survey 3',
    created_at: '09 Feb,10:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '5',
    _id: 3,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Do you need help or support?',
        id: 3,
        positive: 'I am ok for now',
        negative: 'Please contact me',
      },
      {
        text: 'Are you changing your location?',
        id: 4,
        positive: 'On-track',
        negative: 'Off-track',
      },
      {
        text: 'Do you want to speak with psychologist?',
        id: 5,
        positive: 'Yes, I do',
        negative: 'No,I do not',
      },
    ],
  },
  {
    name: 'Survey 4',
    created_at: '08 Feb,10:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '3',
    _id: 5,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Do you need help or support?',
        id: 3,
        positive: 'I am ok for now',
        negative: 'Please contact me',
      },
    ],
  },
];
const ActiveList = ({navigation, list}) => {
  // console.log(list);
  // const [items, setItems] = useState(initialState);
  const renderItem = ({item, index}) => {
    return (
      <ActiveItem
        title={item.name}
        date={item.created_at}
        text={item.description}
        amount={item.question_count}
        navigation={navigation}
        index={index}
        surveyId={item._id}
        // questionsMy={item.questions}
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
