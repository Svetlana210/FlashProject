import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Keychain from 'react-native-keychain';

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    access_token: null,
    // refreshToken: null,
    authenticated: false,
  });
  //   console.log(authState);
  const logout = async () => {
    // await Keychain.resetGenericPassword();

    try {
      await AsyncStorage.removeItem('token');
      console.log('Data removed');
      setAuthState({
        access_token: null,
        //   refresh_token: null,
        authenticated: false,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  const getAccessToken = () => {
    return authState.access_token;
  };
  //   console.log(getAccessToken());
  //   console.log(`token-${authState.access_token}`);
  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};
