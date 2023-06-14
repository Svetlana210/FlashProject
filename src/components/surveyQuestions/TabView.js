import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, useWindowDimensions} from 'react-native';
import RenderSceneScreen from './renderSceneScreen';

import {TabView} from 'react-native-tab-view';

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    padding: 10,
  },
  container: {
    height: 300,
    backgroundColor: 'violet',
  },
});

const TabViewSurvey = ({questions, index, setIndex}) => {
  console.log(questions);
  questions.map((question, id = index) => {
    question.key = id;
  });

  const layout = useWindowDimensions();
  const [routes] = useState(questions);

  console.log(routes);

  const renderScene = ({route}) => {
    return (
      <RenderSceneScreen route={route} index={index} questions={questions} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={() => null}
      />
    </SafeAreaView>
  );
};

export default TabViewSurvey;
