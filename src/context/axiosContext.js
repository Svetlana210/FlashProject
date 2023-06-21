import React, {createContext, useContext, useState} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import {AuthContext} from './authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosContext = createContext();
const {Provider} = AxiosContext;

const AxiosProvider = ({children}) => {
  const [userId, setUserId] = useState('');
  // const [totalItems, setTotalItems] = useState(0);
  console.log(userId);

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

  const signIn = async (email, password) => {
    try {
      const response = await publicAxios.post('/auth/sign_in', {
        email,
        password,
      });
      const {access_token} = response.data;
      console.log(response.data);
      authContext.setAuthState({
        access_token,
        authenticated: false,
      });
      await AsyncStorage.setItem('token', JSON.stringify(access_token));
    } catch (error) {
      console.log(`error token - ${error.message}`);
    }
  };

  const checkEmail = async (email, navigation) => {
    try {
      const response = await publicAxios.post('/auth/user_status', {email});
      console.log(response.data.status);
      if (response.data.status === 'Inactive') {
        navigation.navigate('TempPassScreen', {
          userEmail: email,
        });
      } else if (response.data.status === 'Active') {
        navigation.navigate('SignInScreen', {
          userEmail: email,
        });
      }
      // console.log(response.data.status);
    } catch (error) {
      Alert.alert('User is not exist');
      console.log(`error email - ${error.message}`);
    }
  };
  const findUser = async () => {
    try {
      const response = await authAxios.get('/my_profile');
      setUserId(response.data._id);
      return response.data;
    } catch (error) {
      console.log(`error my-profile - ${error.message}`);
    }
  };

  const onSignUp = async password => {
    try {
      const response = await authAxios.post(`/users/${userId}/set_password`, {
        password,
      });
      console.log(response);
      authContext.setAuthState({...authContext.authState, authenticated: true});
    } catch (error) {
      Alert.alert('Invalid password');
      console.log(`error setPass - ${error.message}`);
    }
  };

  const signInPass = async (email, password) => {
    try {
      const response = await publicAxios.post('/auth/sign_in', {
        email,
        password,
      });
      const {access_token} = response.data;
      console.log(response.data);
      authContext.setAuthState({
        access_token,
        authenticated: true,
      });
      await AsyncStorage.setItem('token', JSON.stringify(access_token));
    } catch (error) {
      Alert.alert('Incorrect password');
      console.log(`error token - ${error.message}`);
    }
  };

  const sendEmail = async email => {
    try {
      const response = await publicAxios.post('/auth/password_recovery', {
        email,
      });
      console.log(response);
    } catch (error) {
      console.log(`error - ${error.message}`);
    }
  };

  const getActiveSurveys = async () => {
    try {
      const response = await authAxios.get(`/users/${userId}/active_surveys`);
      return response.data;
    } catch (error) {
      console.log(`error - ${error.message}`);
    }
  };

  const getQuestions = async surveyId => {
    // console.log(`id-${surveyId}`);
    // console.log(userId);
    try {
      const response = await authAxios.get(
        `/users/${userId}/surveys/${surveyId}/questions`,
      );
      return response.data;
    } catch (error) {
      console.log(`error - ${error.message}`);
    }
  };
  const getHistory = async (offset = 0, LIMIT = 4) => {
    try {
      const response = await authAxios.get(
        `/users/${userId}/history_surveys?offset=${offset}&limit=${LIMIT}`,
      );
      // setTotalItems(response.data.total_items);
      // console.log('history' - response.data.items);
      return response.data;
    } catch (error) {
      console.log(`error - ${error.message}`);
    }
  };
  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
        userId,
        // totalItems,
        signIn,
        checkEmail,
        findUser,
        onSignUp,
        signInPass,
        sendEmail,
        getActiveSurveys,
        getQuestions,
        getHistory,
      }}>
      {children}
    </Provider>
  );
};

export {AxiosContext, AxiosProvider};
