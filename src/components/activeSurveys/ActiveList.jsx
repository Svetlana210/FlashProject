/* eslint-disable no-unused-vars */
import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ActiveItem from './ActiveItem';
const initialState = [
  {
    title: 'Survey 1',
    date: '12 Feb,12:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '2',
    id: 1,
    status: 'New',
    questions: [
      {
        question: 'Are you okay physically?',
        id: 1,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
      {
        question: 'Are you okay emotionally??',
        id: 2,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
    ],
  },
  {
    title: 'Survey 2',
    date: '10 Feb,11:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '4',
    id: 2,
    status: 'New',
    questions: [
      {
        question: 'Are you okay physically?',
        id: 1,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
      {
        question: 'Are you okay emotionally??',
        id: 2,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
      {
        question: 'Do you need help or support?',
        id: 3,
        variantFirst: 'I am ok for now',
        variantSecond: 'Please contact me',
      },
      {
        question: 'Are you changing your location?',
        id: 4,
        variantFirst: 'On-track',
        variantSecond: 'Off-track',
      },
    ],
  },
  {
    title: 'Survey 3',
    date: '09 Feb,10:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '5',
    id: 3,
    status: 'New',
    questions: [
      {
        question: 'Are you okay physically?',
        id: 1,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
      {
        question: 'Are you okay emotionally??',
        id: 2,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
      {
        question: 'Do you need help or support?',
        id: 3,
        variantFirst: 'I am ok for now',
        variantSecond: 'Please contact me',
      },
      {
        question: 'Are you changing your location?',
        id: 4,
        variantFirst: 'On-track',
        variantSecond: 'Off-track',
      },
      {
        question: 'Do you want to speak with psychologist?',
        id: 5,
        variantFirst: 'Yes, I do',
        variantSecond: 'No,I do not',
      },
    ],
  },
  {
    title: 'Survey 4',
    date: '09 Feb,09:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '1',
    id: 4,
    status: 'New',
    questions: [
      {
        question: 'Are you okay physically?',
        id: 1,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
    ],
  },
  {
    title: 'Survey 5',
    date: '08 Feb,10:00',
    text: 'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '3',
    id: 5,
    status: 'New',
    questions: [
      {
        question: 'Are you okay physically?',
        id: 1,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
      {
        question: 'Are you okay emotionally??',
        id: 2,
        variantFirst: 'Yes, I am',
        variantSecond: 'I am not okay',
      },
      {
        question: 'Do you need help or support?',
        id: 3,
        variantFirst: 'I am ok for now',
        variantSecond: 'Please contact me',
      },
    ],
  },
];
const ActiveList = ({navigation, list}) => {
  const [items, setItems] = useState(initialState);
  const renderItem = ({item, index}) => {
    return (
      <ActiveItem
        title={item.name}
        date={item.created_at}
        text={item.description}
        amount={item.question_count}
        navigation={navigation}
        index={index}
        surveyId={item.id}
        questionsMy={item.questions}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default ActiveList;

const styles = StyleSheet.create({});
