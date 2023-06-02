import React, {useContext, useEffect, useCallback, useState} from 'react';
import {AuthContext} from './context/authContext';
// import Spinner from './components/Spinner';
// import * as Keychain from 'react-native-keychain';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import SplashScreen from './pages/SplashScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import EmailScreen from './pages/EmailScreen';
import TempPassScreen from './pages/TempPassScreen';
import SetPassScreen from './pages/SetPassScreen';
import SignInScreen from './pages/SignInScreen';
import HomeScreen from './pages/HomeScreen';
import PassRecoveryScreen from './pages/PassRecoveryScreen';
import CheckEmailScreen from './pages/CheckEmailScreen';
import GoBackBtn from './components/GoBackBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

let logo = require('./images/logoS.jpg');

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
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => <GoBackBtn />,
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => <Image source={logo} />,
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
            name="HomeScreen"
            component={HomeScreen}
            // options={{headerShown: false}}

            //   options={{title: 'Login Form', headerBackTitleVisible: false}}
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
