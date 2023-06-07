import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../../components/shared/AppText';
import * as Progress from 'react-native-progress';

let logo = require('../../images/logoB.png');

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({progress});
    setTimeout(() => {
      this.setState({indeterminate: true});
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({progress});
      }, 500);
    }, 1500);
  }

  render() {
    return (
      <View style={styles.master}>
        <Image source={logo} />
        <AppText isMedium style={styles.title}>
          Welcome!
        </AppText>
        <AppText style={styles.text}>Quick solution to answer surveys</AppText>
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
          color="#FDF7E7"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  master: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 210,
  },
  title: {
    fontSize: 32,
    fontFamily: 'TTNorms-Medium',
    lineHeight: 38.4,
    marginTop: 65,
    marginBottom: 7,
    color: '#000000',
  },
  text: {fontSize: 16, lineHeight: 24, color: '#46596D'},
  btn: {
    backgroundColor: '#F0B528',
    marginTop: 32,
    paddingHorizontal: 79.5,
    paddingVertical: 13,
    borderRadius: 4,
  },
  btnText: {color: '#000000', fontSize: 14},
  progress: {
    margin: 10,
  },
});
