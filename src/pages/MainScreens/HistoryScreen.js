import {StyleSheet, View} from 'react-native';
import React from 'react';
import HistoryList from '../../components/history/HistoryList';

const HistoryScreen = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.historyWrapper}>
          {/* <Text style={styles.title}>History</Text> */}
          <HistoryList />
        </View>
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  wrap: {flex: 1, backgroundColor: '#ffffff'},
  container: {marginHorizontal: 20},
  historyWrapper: {marginTop: 25},
});
