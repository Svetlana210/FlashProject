/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, StyleSheet, FlatList, RefreshControl} from 'react-native';
import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import HistoryItem from '../../components/history/HistoryItem';
import {AxiosContext} from '../../context/axiosContext';

const HistoryScreen = ({route}) => {
  const {LIMIT} = route.params;
  const historyTotalItems = useRef(-1);
  const {getHistory} = useContext(AxiosContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isTheEndOfTheList, setIsTheEndOfTheList] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [page, setPage] = useState(0);

  // console.log(historyTotalItems);
  // console.log(page);
  useEffect(() => {
    _fetchHistory(page);
  }, [page]);

  useEffect(() => {
    if (historyList.length === historyTotalItems.current) {
      setIsTheEndOfTheList(true);
    }
  }, [historyList]);

  const _fetchHistory = useCallback(
    async pageNumber => {
      try {
        if (!isTheEndOfTheList) {
          const data = await getHistory(pageNumber * LIMIT, LIMIT);
          historyTotalItems.current = data.total_items;
          if (pageNumber > 0) {
            setHistoryList(prevList => [...prevList, ...data.items]);
          } else {
            setHistoryList([...data.items]);
          }
        }
        setIsRefreshing(false);
      } catch (error) {
        console.log('HistoryListLarge::getHistory error ', error.message);
      }
    },
    [isTheEndOfTheList],
  );

  const _handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const _handleOnRefresh = useCallback(() => {
    setIsTheEndOfTheList(false);
    setIsRefreshing(true);
    if (page === 0) {
      _fetchHistory(0);
    } else {
      setPage(0);
    }
  }, [page]);

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={historyList}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReached={_handleNextPage}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.listContainerStyle}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={_handleOnRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  listContainerStyle: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
  item: {marginBottom: 13},
});
