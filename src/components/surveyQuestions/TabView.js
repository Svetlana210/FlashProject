import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, useWindowDimensions} from 'react-native';
import RenderSceneScreen from './renderSceneScreen';

import {TabView} from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
});

const TabViewSurvey = ({
  questions,
  index,
  setIndex,
  selectedRadio,
  setSelectedRadio,
}) => {
  // console.log(questions);

  const layout = useWindowDimensions();
  const [routes] = useState(questions);

  // console.log(routes);

  const renderScene = ({route}) => {
    return (
      <RenderSceneScreen
        route={route}
        index={index}
        questions={questions}
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
      />
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
