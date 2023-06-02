import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Keychain from 'react-native-keychain';

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    access_token: null,
    // refreshToken: null,
    authenticated: null,
  });

  const logout = async () => {
    // await Keychain.resetGenericPassword();
    setAuthState({
      access_token: null,
      //   refresh_token: null,
      authenticated: false,
    });
    AsyncStorage.removeItem('token');
  };

  const getAccessToken = () => {
    return authState.access_token;
  };
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
