/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import HistoryItem from './HistoryItem';
import {AxiosContext} from '../../context/axiosContext';

const HistoryListLarge = ({LIMIT}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const {getHistory, totalItems} = useContext(AxiosContext);
  console.log(historyList);
  console.log(`off ${offset}`);
  console.log(`page ${page}`);

  //   const totalPage = Math.ceil(totalItems / LIMIT);
  //   console.log(totalPage);

  useEffect(() => {
    getHistory(offset, LIMIT).then(data => setHistoryList(data));
  }, []);

  const handleNextPage = () => {
    setIsRefreshing(true);
    setPage(page + 1);
    setOffset(page * LIMIT);

    getHistory(offset, LIMIT)
      .then(data => {
        setHistoryList(prevData => {
          [...prevData, ...data];
        });
      })
      .catch(err => console.log(err.message));
    setIsRefreshing(false);
  };
  // const [surveys, setSurveys] = useState(initialState);

  const renderItem = ({item, index}) => {
    return (
      <HistoryItem
        title={item.name}
        id={item._id}
        date={item.end_date}
        status={item.finished}
        style={styles.item}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={historyList}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReached={handleNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={() => {}} />
        }
      />
    </View>
  );
};

export default HistoryListLarge;

const styles = StyleSheet.create({
  item: {marginBottom: 76},
});
