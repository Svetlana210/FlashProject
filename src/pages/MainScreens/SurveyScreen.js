/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';
import SurveyQuestionsIndicator from '../../components/surveyQuestions/surveyQuestionsIndicator';
import Button from '../../components/reusableComponents/Button';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// import {Image} from 'react-native-elements';

const SurveyScreen = ({route, navigation}) => {
  const {amount, questions, index, title} = route.params;
  const [selectedRadio, setSelectedRadio] = useState(0);
  // console.log(questions[0].question);
  const [screen, setScreen] = useState(0);
  console.log(amount);

  let Question;
  if (amount === '1') {
    Question = [
      questions[0].question,
      // questions[1].question,
      // questions[2].question,
      // questions[3].question,
      // questions[4].question,
    ];
  }
  if (amount === '2') {
    Question = [
      questions[0].question,
      questions[1].question,
      // questions[2].question,
      // questions[3].question,
      // questions[4].question,
    ];
  }
  if (amount === '3') {
    Question = [
      questions[0].question,
      questions[1].question,
      questions[2].question,
      // questions[3].question,
      // questions[4].question,
    ];
  }
  if (amount === '4') {
    Question = [
      questions[0].question,
      questions[1].question,
      questions[2].question,
      questions[3].question,
      // questions[4].question,
    ];
  }
  if (amount === '5') {
    Question = [
      questions[0].question,
      questions[1].question,
      questions[2].question,
      questions[3].question,
      questions[4].question,
    ];
  }

  console.log(Question);
  // const [answerFirst, setAnswerFirst] = useState(questions[0].variantFirst);
  // const [answerSecond, setAnswerSecond] = useState(questions[0].variantSecond);
  // console.log(questions);
  const onNextBtn = () => {
    setScreen(currScreen => currScreen + 1);
    if (screen === Question.length - 1) {
      navigation.navigate(
        'SendSurveyScreen',
        //   {
        //   id: index,
        //   title: title,
        //   amount: amount,
        //   questions: questions,
        // }
      );
    }
  };
  return (
    <View style={styles.wrapperScreen}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <AppText style={styles.text}>Questions</AppText>
          <AppText style={styles.text}>1/{amount}</AppText>
        </View>
        <SurveyQuestionsIndicator
          amount={amount}
          Question={Question}
          screen={screen}
        />
        <AppText isBold style={styles.question}>
          {Question[screen]}
        </AppText>
        <View
          style={{
            ...styles.wrapButton,
            backgroundColor: selectedRadio === 1 ? '#FFFCF3' : '#ffffff',
            borderColor: selectedRadio === 1 ? '#F0B528' : '#E0E5EB',
          }}>
          <TouchableOpacity onPress={() => setSelectedRadio(1)}>
            <View style={styles.radioBg}>
              <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                  {selectedRadio === 1 ? (
                    <View style={styles.radioChecked} />
                  ) : null}
                </View>

                <AppText
                  style={{
                    ...styles.radioText,
                    fontWeight: selectedRadio === 1 ? 700 : 400,
                  }}>
                  {questions[0].variantFirst}
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.wrapButton,
            backgroundColor: selectedRadio === 2 ? '#FFFCF3' : '#ffffff',
            borderColor: selectedRadio === 2 ? '#F0B528' : '#E0E5EB',
          }}>
          <TouchableOpacity onPress={() => setSelectedRadio(2)}>
            <View style={styles.radioBg}>
              <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                  {selectedRadio === 2 ? (
                    <View style={styles.radioChecked} />
                  ) : null}
                </View>
                <AppText
                  style={{
                    ...styles.radioText,
                    fontWeight: selectedRadio === 2 ? 700 : 400,
                  }}>
                  {questions[0].variantSecond}
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnWrapper}>
          {selectedRadio === 1 || selectedRadio === 2 ? (
            <>
              <Button
                text="PREVIOUS"
                style={styles.btnPrev}
                disabled={screen === 0}
              />
              <Button text="NEXT" style={styles.btnNext} onPress={onNextBtn} />
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  wrapperScreen: {
    backgroundColor: '#FAFAFA',
    paddingBottom: 300,
    alignItems: 'center',
  },
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
  question: {
    fontSize: 22,
    lineHeight: 26,
    color: '#1D252D',
    marginVertical: 32,
  },
  radioText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#1D252D',
  },
  radio: {
    width: 25,
    height: 25,
    borderColor: '#F0B528',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioChecked: {
    width: 16,
    height: 16,
    backgroundColor: '#F0B528',
    borderRadius: 20,
    margin: 2.5,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapButton: {
    width: 340,
    height: 64,
    // borderColor: '#E0E5EB',
    // backgroundColor: '#ffffff',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 165,
    justifyContent: 'center',
  },
  btnPrev: {width: 156, paddingHorizontal: 40},
  btnNext: {width: 156, paddingHorizontal: 55},
});
