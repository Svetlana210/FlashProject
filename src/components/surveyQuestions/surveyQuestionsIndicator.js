import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
// let rect = require('../../images/Rect.png');

const SurveyQuestionsIndicator = ({amount, Question, screen}) => {
  if (amount === '5') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="#FDF7E7"
        />
      </View>
    );
  }
  if (amount === '4') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="#FDF7E7"
        />
      </View>
    );
  }
  if (amount === '3') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressThree]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressThree]}
          color="#FDF7E7"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressThree]}
          color="#FDF7E7"
        />
      </View>
    );
  }
  if (amount === '2') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressTwo]}
          color="#F0B528"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressTwo]}
          color="#F0B528"
        />
      </View>
    );
  }
  if (amount === '1') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressOne]}
          // color="#FDF7E7"
        />
      </View>
    );
  }
};

export default SurveyQuestionsIndicator;

const styles = StyleSheet.create({
  wrap: {
    // marginHorizontal: 13,
    // width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    tintColor: '#FDF7E7',
  },
  progress: {
    // margin: 10,
    backgroundColor: '#F0B528',
  },

  progressFive: {width: 60},
  progressFour: {width: 78},
  progressThree: {width: 107},
  progressTwo: {width: 166},
  progressOne: {width: 340},
});
