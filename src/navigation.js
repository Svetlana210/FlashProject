import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';
import EmailScreen from './pages/EmailScreen';
import TempPassScreen from './pages/TempPassScreen';
import SignInScreen from './pages/SignInScreen';

// import useAuth from './context/useAuth';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: 'Login Form', headerBackTitleVisible: false}}
        />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{
            title: 'Register Form',
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name="TempPassScreen"
          options={{title: 'Help'}}
          component={TempPassScreen}
        />
        <Stack.Screen
          name="SignInScreen"
          options={{title: 'Help'}}
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
