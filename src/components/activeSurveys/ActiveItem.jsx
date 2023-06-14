/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../reusableComponents/AppText';
import Button from '../reusableComponents/Button';
import {AxiosContext} from '../../context/axiosContext';

const ActiveItem = ({
  title,
  amount,
  date,
  text,
  // status,
  navigation,
  index,
  surveyId,
  questionsMy,
  // questions,
}) => {
  const [questions, setQuestions] = useState([]);
  const {getQuestions, findUser} = useContext(AxiosContext);
  // console.log(questions);
  useEffect(() => {
    findUser();
  }, []);
  const handleonStart = () => {
    getQuestions(surveyId).then(setQuestions);
    navigation.navigate('Survey', {
      id: index,
      title: title,
      amount: amount,
      questions: questionsMy,
    });
  };
  return (
    <View style={styles.wrap}>
      <AppText isMedium style={styles.title}>
        {title}
      </AppText>
      <AppText style={styles.text}>{text}</AppText>
      <AppText style={styles.date}>
        {amount} Questions | {date}
      </AppText>
      <AppText isMedium style={styles.status}>
        new
      </AppText>
      <Button
        text="START"
        style={styles.btn}
        styleText={styles.btnText}
        onPress={handleonStart}
      />
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
    paddingHorizontal: 100,
    marginTop: 24,
  },
});
