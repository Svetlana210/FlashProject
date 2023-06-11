import {StyleSheet, FlatList, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../reusableComponents/AppText';

const SurveyList = ({questions}) => {
  const [list, setList] = useState(questions);
  //   console.log(list);
  console.log(list);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.wrap}>
        <AppText>{item.question}</AppText>
        <AppText>{item.variantFirst}</AppText>
        <AppText>{item.variantSecond}</AppText>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        // horizontal={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SurveyList;

const styles = StyleSheet.create({
  wrap: {flexDirection: 'column'},
});
