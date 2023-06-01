import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './authContext';
// import createAuthRefreshInterceptor from 'axios-auth-refresh';
// import * as Keychain from 'react-native-keychain';

const AxiosContext = createContext();
const {Provider} = AxiosContext;

const AxiosProvider = ({children}) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: 'https://qa-api-flash.lasoft.org/api/v1',
  });

  const publicAxios = axios.create({
    baseURL: 'https://qa-api-flash.lasoft.org/api/v1',
  });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  //   const refreshAuthLogic = failedRequest => {
  //     const data = {
  //       refresh_token: authContext.authState.refresh_token,
  //     };

  //     const options = {
  //       method: 'POST',
  //       data,
  //       url: 'https://qa-api-flash.lasoft.org/api/v1/token/refresh',
  //     };

  //     return axios(options)
  //       .then(async tokenRefreshResponse => {
  //         failedRequest.response.config.headers.Authorization =
  //           'Bearer ' + tokenRefreshResponse.data.access_token;

  //         authContext.setAuthState({
  //           ...authContext.authState,
  //           access_token: tokenRefreshResponse.data.access_token,
  //         });

  //         await Keychain.setGenericPassword(
  //           'token',
  //           JSON.stringify({
  //             access_token: tokenRefreshResponse.data.access_token,
  //             refresh_token: authContext.authState.refresh_token,
  //           }),
  //         );

  //         return Promise.resolve();
  //       })
  //       .catch(e => {
  //         authContext.setAuthState({
  //           access_token: null,
  //           refresh_token: null,
  //         });
  //       });
  //   };

  //   createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}>
      {children}
    </Provider>
  );
};

export {AxiosContext, AxiosProvider};
