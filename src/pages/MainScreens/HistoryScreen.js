import {StyleSheet, View} from 'react-native';
import React from 'react';
import HistoryListLarge from '../../components/history/HistoryListLarge';

const HistoryScreen = ({route}) => {
  const {historyList, offset, LIMIT} = route.params;

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.historyWrapper}>
          <HistoryListLarge
            historyList={historyList}
            offset={offset}
            LIMIT={LIMIT}
          />
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
