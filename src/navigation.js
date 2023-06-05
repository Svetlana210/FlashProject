/* eslint-disable react/no-unstable-nested-components */
import React, {useContext, useEffect, useCallback, useState} from 'react';
import {AuthContext} from './context/authContext';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
// import Spinner from './components/Spinner';
// import * as Keychain from 'react-native-keychain';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Image} from 'react-native';
import SplashScreen from './pages/AuthScreens/SplashScreen';
import WelcomeScreen from './pages/AuthScreens/WelcomeScreen';
import EmailScreen from './pages/AuthScreens/EmailScreen';
import TempPassScreen from './pages/AuthScreens/TempPassScreen';
import SetPassScreen from './pages/AuthScreens/SetPassScreen';
import SignInScreen from './pages/AuthScreens/SignInScreen';
import HomeScreen from './pages/MainScreens/HomeScreen';
import PassRecoveryScreen from './pages/AuthScreens/PassRecoveryScreen';
import CheckEmailScreen from './pages/AuthScreens/CheckEmailScreen';
import ProfileScreen from './pages/MainScreens/ProfileScreen';
import HistoryScreen from './pages/MainScreens/HistoryScreen';
import SurveyScreen from './pages/MainScreens/SurveyScreen';

import GoBackBtn from './components/shared/GoBackBtn';
import HeaderAuth from './components/headers/HeaderAuth';
import HeaderMain from './components/headers/HeaderMain';
import AsyncStorage from '@react-native-async-storage/async-storage';

// let logo = require('./images/logoS.jpg');
let union = require('./images/union.png');
const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const [status, setStatus] = useState('loading');

  const loadJWT = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      const jwt = JSON.parse(value);
      console.log(jwt);
      authContext.setAuthState({
        access_token: jwt || null,
        authenticated: jwt ? true : false,
      });

      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.log(`AsyncSt Error: ${error.message}`);
      authContext.setAuthState({
        access_token: null,
        authenticated: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadJWT();
    }, 2000);
    return () => clearTimeout(timer);
  }, [loadJWT]);

  console.log(authContext.authState.authenticated);
  if (status === 'loading') {
    return <SplashScreen />;
  }

  if (authContext?.authState?.authenticated === false) {
    return (
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={{
            header: () => <HeaderAuth />,
          }}>
          <AuthStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}

            //   options={{title: 'Login Form', headerBackTitleVisible: false}}
          />

          <AuthStack.Screen
            name="EmailScreen"
            component={EmailScreen}
            options={{
              title: '',
            }}
          />
          <AuthStack.Screen
            name="TempPassScreen"
            options={{title: ''}}
            component={TempPassScreen}
          />
          <AuthStack.Screen
            name="SetPassScreen"
            options={{title: ''}}
            component={SetPassScreen}
          />
          <AuthStack.Screen
            name="SignInScreen"
            options={{title: ''}}
            component={SignInScreen}
          />
          <AuthStack.Screen
            name="PassRecoveryScreen"
            options={{title: ''}}
            component={PassRecoveryScreen}
          />
          <AuthStack.Screen
            name="CheckEmailScreen"
            options={{title: ''}}
            component={CheckEmailScreen}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            options={({navigation}) => ({
              header: () => (
                <HeaderMain text="Surveys">
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('Profile')}>
                    <Image source={union} style={styles.logo} />
                  </TouchableOpacity>
                </HeaderMain>
              ),
            })}
            name="HomeScreen"
            component={HomeScreen}
          />
          <MainStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={() => ({
              header: () => (
                <HeaderMain text="My profile" style={styles.profile}>
                  <GoBackBtn style={styles.backBtn} />
                </HeaderMain>
              ),
            })}
          />
          <MainStack.Screen
            name="History"
            component={HistoryScreen}
            options={() => ({
              header: () => (
                <HeaderMain text="History" style={styles.profile}>
                  <GoBackBtn style={styles.backBtn} />
                </HeaderMain>
              ),
            })}
          />
          <MainStack.Screen
            name="Survey"
            component={SurveyScreen}
            options={() => ({
              header: () => (
                <HeaderMain text="Survey 1" style={styles.profile}>
                  <GoBackBtn style={styles.backBtn} />
                </HeaderMain>
              ),
            })}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
};
//   return (
//     <NavigationContainer>
//       <AuthStack.Navigator
//         screenOptions={{
//           // eslint-disable-next-line react/no-unstable-nested-components
//           headerLeft: () => <GoBackBtn />,
//           // eslint-disable-next-line react/no-unstable-nested-components
//           headerRight: () => <Image source={logo} />,
//         }}>
//         <AuthStack.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{headerShown: false}}

//           //   options={{title: 'Login Form', headerBackTitleVisible: false}}
//         />
//         <AuthStack.Screen
//           name="EmailScreen"
//           component={EmailScreen}
//           options={{
//             title: '',
//           }}
//         />
//         <AuthStack.Screen
//           name="TempPassScreen"
//           options={{title: ''}}
//           component={TempPassScreen}
//         />
//         <AuthStack.Screen
//           name="SetPassScreen"
//           options={{title: ''}}
//           component={SetPassScreen}
//         />
//         <AuthStack.Screen
//           name="SignInScreen"
//           options={{title: ''}}
//           component={SignInScreen}
//         />
//         <AuthStack.Screen
//           name="HomeScreen"
//           options={{title: ''}}
//           component={HomeScreen}
//         />
//       </AuthStack.Navigator>
//     </NavigationContainer>
//   );
// };
export default Navigation;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 85,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#d5d2d6',
  },
  logo: {position: 'absolute', top: 43, right: 20, width: 25, height: 25},

  profile: {
    position: 'absolute',
    top: 43,
    left: 48,
  },
  backBtn: {
    position: 'absolute',
    top: 45,
    left: 18,
  },
});
