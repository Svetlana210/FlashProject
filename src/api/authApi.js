// // const authContext = useContext(AuthContext);
// // const {publicAxios} = useContext(AxiosContext);

// const setTempPassword = async () => {
//   try {
//     const response = await publicAxios.post('/auth/sign_in', {
//       email,
//       password,
//     });
//     const {access_token} = response.data;
//     console.log(response.data);
//     authContext.setAuthState({
//       access_token,
//       authenticated: false,
//     });
//     await AsyncStorage.setItem('token', JSON.stringify(access_token));
//   } catch (error) {
//     console.log(`error token - ${error.message}`);
//   }
// };
