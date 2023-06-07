import React, {createContext, useState} from 'react';

const AuthContext = createContext(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    access_token: null,
    authenticated: false,
  });

  const getAccessToken = () => {
    return authState.access_token;
  };

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
      }}>
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};
