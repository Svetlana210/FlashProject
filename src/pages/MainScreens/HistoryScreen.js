import {StyleSheet, View} from 'react-native';
import React from 'react';
import HistoryList from '../../components/history/HistoryList';

const HistoryScreen = ({route}) => {
  const {historyList} = route.params;
  console.log(historyList);
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.historyWrapper}>
          <HistoryList historyList={historyList} />
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
