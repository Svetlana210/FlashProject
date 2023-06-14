/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../reusableComponents/AppText';

const RenderSceneScreen = ({
  route,
  index,
  questions,
  selectedRadio,
  setSelectedRadio,
}) => {
  return (
    <>
      <AppText isBold style={styles.question}>
        {route.text}
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
                {route.positive}
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
              {index !== questions.length && (
                <AppText
                  style={{
                    ...styles.radioText,
                    fontWeight: selectedRadio === 2 ? 700 : 400,
                  }}>
                  {route.negative}
                </AppText>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RenderSceneScreen;

const styles = StyleSheet.create({
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
    width: 320,
    height: 64,
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
});
