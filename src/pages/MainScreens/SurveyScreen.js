import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';
import SurveyQuestionsIndicator from '../../components/surveyQuestions/surveyQuestionsIndicator';
import SurveyList from '../../components/surveyQuestions/surveyList';

// import {Image} from 'react-native-elements';

const SurveyScreen = ({route}) => {
  const {id, title, amount, questions} = route.params;
  console.log(questions);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <AppText style={styles.text}>Questions</AppText>
        <AppText style={styles.text}>1/{amount}</AppText>
      </View>
      <SurveyQuestionsIndicator amount={amount} />
      {/* <AppText isBold style={styles.title}>
        Are you okay physically?
      </AppText> */}
      <SurveyList questions={questions} />
    </View>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  wrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  text: {
    fontSize: 14,
    lineHeight: 17,
    color: '#828B94',
    marginBottom: 8,
  },
  wrap: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    tintColor: '#FDF7E7',
  },
  title: {
    fontSize: 22,
    lineHeight: 26,
    marginVertical: 32,
  },
});
