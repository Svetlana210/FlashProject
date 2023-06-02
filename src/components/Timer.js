import React from 'react';
// import {Text, View} from 'react-native';
function CountDownTimer() {
  const [time, setTime] = React.useState(59);
  const timerRef = React.useRef(time);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
}
export default CountDownTimer;
