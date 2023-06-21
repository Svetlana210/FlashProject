/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const SurveyQuestionsIndicator = ({questions, index}) => {
  const getWidth = () => {
    const width = 328 / questions.length;
    return width;
  };
  const elements = questions.map((item, id = index) => {
    return (
      <Progress.Bar
        key={id}
        style={{
          ...styles.progress,
          backgroundColor: id <= index ? '#F0B528' : '#FDF7E7',
          width: getWidth(),
        }}
        color="#FDF7E7"
      />
    );
  });

  return <View style={styles.wrap}>{elements}</View>;
};

export default SurveyQuestionsIndicator;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
  },
  icon: {
    tintColor: '#FDF7E7',
  },
});
