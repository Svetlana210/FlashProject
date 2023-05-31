import {useState} from 'react';
const usePassword = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowClick = () => setShowPassword(!showPassword);

  return {showPassword, setShowPassword, handleShowClick};
};
export default usePassword;

// import React, {useState} from 'react';
// import {TouchableOpacity} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';

// const showPassword = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [showPasswordText, setShowPassword] = useState(false);

//   const handleShowClick = () => setShowPassword(!showPasswordText);
//   return (
//     <TouchableOpacity onPress={() => handleShowClick}>
//       {showPasswordText ? (
//         <Feather name="eye" size={23} color={'#49454F'} />
//       ) : (
//         <Feather name="eye-off" size={23} color={'#49454F'} />
//       )}
//     </TouchableOpacity>
//   );
// };
// export default showPassword;

// const styles = StyleSheet.create({
//   master: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 30,
//     marginHorizontal: 30,
//   },
//   text: {
//     fontSize: 26,

//     marginBottom: 20,
//   },
// });
