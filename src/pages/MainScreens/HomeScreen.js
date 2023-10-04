/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import HistoryList from '../../components/history/HistoryList';
import ActiveList from '../../components/activeSurveys/ActiveList.jsx';
import AppText from '../../components/reusableComponents/AppText';
import {AxiosContext} from '../../context/axiosContext';
const initialState = [
  {
    name: 'Survey 1',
    created_at: '12 Feb,12:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '2',
    _id: 1,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
    ],
  },
  {
    name: 'Survey 2',
    created_at: '10 Feb,11:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '4',
    _id: 2,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Do you need help or support?',
        id: 3,
        positive: 'I am ok for now',
        negative: 'Please contact me',
      },
      {
        text: 'Are you changing your location?',
        id: 4,
        positive: 'On-track',
        negative: 'Off-track',
      },
    ],
  },
  {
    name: 'Survey 3',
    created_at: '09 Feb,10:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '5',
    _id: 3,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Do you need help or support?',
        id: 3,
        positive: 'I am ok for now',
        negative: 'Please contact me',
      },
      {
        text: 'Are you changing your location?',
        id: 4,
        positive: 'On-track',
        negative: 'Off-track',
      },
      {
        text: 'Do you want to speak with psychologist?',
        id: 5,
        positive: 'Yes, I do',
        negative: 'No,I do not',
      },
    ],
  },
  {
    name: 'Survey 4',
    created_at: '08 Feb,10:00',
    description:
      'Dear coovorkers, please take 2 min of your time and send responses as ',
    amount: '3',
    _id: 5,
    status: 'New',
    questions: [
      {
        text: 'Are you okay physically?',
        id: 1,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Are you okay emotionally??',
        id: 2,
        positive: 'Yes, I am',
        negative: 'I am not okay',
      },
      {
        text: 'Do you need help or support?',
        id: 3,
        positive: 'I am ok for now',
        negative: 'Please contact me',
      },
    ],
  },
];
let env = require('../../images/Env.png');
const LIMIT = 9;
const HomeScreen = ({navigation}) => {
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState(initialState);
  const [historyList, setHistoryList] = useState([]);
  const {getActiveSurveys, findUser, getHistory} = useContext(AxiosContext);
  console.log('list', list);
  useEffect(() => {
    findUser();
  }, [findUser]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistory(offset, LIMIT);
      setHistoryList(data?.items);
    };

    // const fetchDataActive = async () => {
    //   const data = await getActiveSurveys();
    //   setList(data?.items);
    // };

    fetchData();
    // fetchDataActive();
  }, [getHistory, offset]);

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <AppText isBold style={styles.title}>
          Active
        </AppText>
        {list !== [] ? (
          <View style={styles.imageWrapper}>
            <ActiveList navigation={navigation} list={list} />
          </View>
        ) : (
          <View style={styles.imageWrapper}>
            <Image source={env} style={styles.img} />
            <AppText isMedium style={styles.text}>
              No Active Surveys
            </AppText>
            <AppText style={styles.textSmall}>
              New survey will appear here
            </AppText>
          </View>
        )}

        <View style={styles.historyWrapper}>
          <AppText isBold style={styles.title}>
            History
          </AppText>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate('History', {
                LIMIT: LIMIT,
              })
            }>
            <AppText isBold style={styles.btnAll}>
              SEE ALL
            </AppText>
          </TouchableOpacity>
        </View>
        <HistoryList historyList={historyList} LIMIT={LIMIT} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrap: {flex: 1, backgroundColor: '#FAFAFA'},
  container: {marginHorizontal: 20},
  title: {
    fontSize: 22,
    lineHeight: 27,
    color: '#000000',
    marginTop: 24,
    marginBottom: 16,
  },
  imageWrapper: {
    height: 200,
    textAlign: 'center',
    alignItems: 'center',
  },
  img: {
    width: 128,
    height: 128,
  },
  historyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  textSmall: {
    color: '#828B94',
    fontSize: 14,
    lineHeight: 21,
  },
  btnAll: {
    color: '#f0b528',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 35,
  },
});
