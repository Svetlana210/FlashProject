import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import WelcomeScreen from './pages/WelcomeScreen';
import EmailScreen from './pages/EmailScreen';
import TempPassScreen from './pages/TempPassScreen';
import SetPassScreen from './pages/SetPassScreen';
import SignInScreen from './pages/SignInScreen';
import GoBackBtn from './components/GoBackBtn';

let logo = require('./images/logoS.jpg');

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => <GoBackBtn />,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <Image source={logo} />,
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}

          //   options={{title: 'Login Form', headerBackTitleVisible: false}}
        />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="TempPassScreen"
          options={{title: ''}}
          component={TempPassScreen}
        />
        <Stack.Screen
          name="SetPassScreen"
          options={{title: ''}}
          component={SetPassScreen}
        />
        <Stack.Screen
          name="SignInScreen"
          options={{title: ''}}
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
