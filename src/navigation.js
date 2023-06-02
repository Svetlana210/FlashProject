import React, {useContext} from 'react';
import {AuthContext} from './context/authContext';
// import Spinner from './components/Spinner';
// import * as Keychain from 'react-native-keychain';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import WelcomeScreen from './pages/WelcomeScreen';
import EmailScreen from './pages/EmailScreen';
import TempPassScreen from './pages/TempPassScreen';
import SetPassScreen from './pages/SetPassScreen';
import SignInScreen from './pages/SignInScreen';
import HomeScreen from './pages/HomeScreen';
import PassRecoveryScreen from './pages/PassRecoveryScreen';
import GoBackBtn from './components/GoBackBtn';

let logo = require('./images/logoS.jpg');

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const Navigation = () => {
  const authContext = useContext(AuthContext);
  // const [status, setStatus] = useState('loading');

  // const loadJWT = useCallback(async () => {
  //   try {
  //     const value = await Keychain.getGenericPassword();
  //     const jwt = JSON.parse(value.password);

  //     authContext.setAuthState({
  //       accessToken: jwt.accessToken || null,
  //       refreshToken: jwt.refreshToken || null,
  //       authenticated: jwt.accessToken !== null,
  //     });
  //     setStatus('success');
  //   } catch (error) {
  //     setStatus('error');
  //     console.log(`Keychain Error: ${error.message}`);
  //     authContext.setAuthState({
  //       accessToken: null,
  //       refreshToken: null,
  //       authenticated: false,
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   loadJWT();
  // }, [loadJWT]);

  // if (status === 'loading') {
  //   return <Spinner />;
  // }

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
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
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
