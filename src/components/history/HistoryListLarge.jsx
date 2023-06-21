// /* eslint-disable react-hooks/exhaustive-deps */
// import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
// import React, {useState, useContext, useEffect, useRef} from 'react';
// import HistoryItem from './HistoryItem';
// import {AxiosContext} from '../../context/axiosContext';

// const HistoryListLarge = ({LIMIT}) => {
//   const [historyList, setHistoryList] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [page, setPage] = useState(1);
//   const offsetRef = useRef(0);
//   console.log(offsetRef);
//   console.log(page);
//   const {getHistory, totalItems} = useContext(AxiosContext);
//   //   const totalPage = Math.ceil(totalItems / LIMIT);
//   //   console.log(totalPage);

//   const fetchData = async (pageNumber, pageSize) => {
//     const offset = (pageNumber - 1) * pageSize;
//     offsetRef.current = offset;

//     setIsLoading(true);
//     const newData = await getHistory(offset, pageSize);
//     setIsLoading(false);

//     if (pageNumber === 1) {
//       setHistoryList(newData);
//     } else {
//       setHistoryList(prevData => [...prevData, ...newData]);
//     }
//   };

//   const refreshData = () => {
//     setIsRefreshing(true);
//     setPage(1);
//     offsetRef.current = 0;
//     fetchData(1, LIMIT);
//     setIsRefreshing(false);
//   };

//   const loadMoreData = () => {
//     if (!isLoading) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       fetchData(nextPage, LIMIT);
//     }
//   };

//   useEffect(() => {
//     fetchData(page, LIMIT);
//   }, []);

//   // useEffect(() => {
//   //   getHistory(offset, LIMIT).then(data => setHistoryList(data));
//   // }, []);

//   // const fetchData = async (offsetRef, pageSize) => {
//   //   const offset =
//   //   const data = await getHistory(offsetRef, pageSize);
//   // };

//   // const handleNextPage = () => {
//   //   setIsRefreshing(true);
//   //   setPage(page + 1);
//   //   setOffset(page * LIMIT);

//   //   getHistory(offset, LIMIT)
//   //     .then(data => {
//   //       setHistoryList(prevData => [...prevData, ...data]);
//   //     })
//   //     .catch(err => console.log(err.message));
//   //   setIsRefreshing(false);
//   // };
//   // // const [surveys, setSurveys] = useState(initialState);
//   // useEffect(() => {
//   //   fetchData(offset, LIMIT);
//   // }, []);
//   const renderItem = ({item, index}) => {
//     return (
//       <HistoryItem
//         title={item.name}
//         id={item._id}
//         date={item.end_date}
//         status={item.finished}
//         style={styles.item}
//       />
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={historyList}
//         renderItem={renderItem}
//         keyExtractor={item => item._id}
//         onEndReached={loadMoreData}
//         onEndReachedThreshold={0.5}
//         refreshControl={
//           <RefreshControl refreshing={isRefreshing} onRefresh={refreshData} />
//         }
//       />
//     </View>
//   );
// };

// export default HistoryListLarge;

// const styles = StyleSheet.create({
//   item: {marginBottom: 76},
// });
