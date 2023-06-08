import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const AppText = ({style, fontFamily, ...props}) => {
  if (props.isBold) {
    fontFamily = `${fontFamily}-Bold`;
  } else if (props.isMedium) {
    fontFamily = `${fontFamily}-Medium`;
  } else {
    fontFamily = `${fontFamily}-Regular`;
  }

  return <Text style={[styles.mainText, style, {fontFamily}]} {...props} />;
};

AppText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fontFamily: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
};

AppText.defaultProps = {
  fontFamily: 'TTNorms',
  style: null,
  isBold: false,
  isItalic: false,
};

export default AppText;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 16,
    textAlignVertical: 'center',
    color: '#1D1B20',
  },
});
