import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
// let rect = require('../../images/Rect.png');

const SurveyQuestionsIndicator = ({amount, questions, Question, screen}) => {
  const getWidth = () => {
    const width = 328 / questions.length;
    return width;
  };
  console.log(getWidth());
  const elements = questions.map((item, index) => {
    return (
      <Progress.Bar
        style={{
          ...styles.progress,
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
    // marginHorizontal: 13,
    // width: '100%',
    flexDirection: 'row',
    gap: 7,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    tintColor: '#FDF7E7',
  },
  progress: {
    // margin: 10,
    backgroundColor: '#F0B528',
  },

  // progressFive: {width: 60},
  // progressFour: {width: 78},
  // progressThree: {width: 107},
  // progressTwo: {width: 166},
  // progressOne: {width: 340},
});
