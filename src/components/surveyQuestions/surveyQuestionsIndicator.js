import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
// let rect = require('../../images/Rect.png');

const SurveyQuestionsIndicator = ({amount}) => {
  if (amount === '5') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFive]}
          color="red"
        />
      </View>
    );
  }
  if (amount === '4') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressFour]}
          color="red"
        />
      </View>
    );
  }
  if (amount === '3') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressThree]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressThree]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressThree]}
          color="red"
        />
      </View>
    );
  }
  if (amount === '2') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressTwo]}
          color="red"
        />
        <Progress.Bar
          style={[styles.progress, styles.progressTwo]}
          color="red"
        />
      </View>
    );
  }
  if (amount === '1') {
    return (
      <View style={styles.wrap}>
        <Progress.Bar
          style={[styles.progress, styles.progressOne]}
          color="red"
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
    backgroundColor: '#FDF7E7',
  },

  progressFive: {width: 60},
  progressFour: {width: 78},
  progressThree: {width: 107},
  progressTwo: {width: 166},
  progressOne: {width: 340},
});
