/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import AppText from '../../components/reusableComponents/AppText';
import SurveyQuestionsIndicator from '../../components/surveyQuestions/surveyQuestionsIndicator';
import Button from '../../components/reusableComponents/Button';
import TabViewSurvey from '../../components/surveyQuestions/TabView';

const SurveyScreen = ({route, navigation}) => {
  const {amount, questions} = route.params;
  console.log(questions);
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [index, setIndex] = useState(0);
  const onNext = () => {
    if (selectedRadio !== 0) {
      setIndex(currIndex => currIndex + 1);
      // setSelectedRadio(0);
    } else {
      Alert.alert('Please choose the option');
    }

    if (index + 1 === questions.length) {
      navigation.navigate('SendSurveyScreen');
    }
  };

  return (
    <View style={styles.wrapperScreen}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <AppText style={styles.text}>Questions</AppText>
          <AppText style={styles.text}>
            {index + 1}/{questions.length}
          </AppText>
        </View>
        <SurveyQuestionsIndicator
          amount={amount}
          questions={questions}
          index={index}
        />
        <TabViewSurvey
          questions={questions}
          index={index}
          setIndex={setIndex}
          setSelectedRadio={setSelectedRadio}
          selectedRadio={selectedRadio}
        />

        <View style={styles.btnWrapper}>
          <Button
            text="PREVIOUS"
            style={{
              ...styles.btnPrev,
              backgroundColor: index === 0 ? '#FFF2D3' : '#F0B528',
            }}
            styleText={{color: index === 0 ? '#A1A1A1' : '#1D252D'}}
            disabled={index === 0}
            onPress={() => {
              setIndex(currIndex => currIndex - 1);
            }}
          />
          <Button
            text="NEXT"
            style={styles.btnNext}
            onPress={onNext}
            // disabled={selectedRadio === 0 ? true : false}
          />
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

  btnWrapper: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 165,
    justifyContent: 'center',
  },
  btnPrev: {width: 156, paddingHorizontal: 40},
  btnNext: {width: 156, paddingHorizontal: 55},
});
