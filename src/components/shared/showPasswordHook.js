import {useState} from 'react';
const usePassword = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowClick = () => setShowPassword(!showPassword);

  return {showPassword, setShowPassword, handleShowClick};
};
export default usePassword;
