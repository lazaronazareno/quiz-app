import React, { useEffect, useState } from 'react';

const Countdown = ({setTimeUp, seconds}) => {
  const [ timer, setTimer] = useState(seconds)
  const [timeLeft, setTimeLeft] = useState(false)

  useEffect(() => {
    const time = setTimeout(function() {
        setTimer(timer - 1);
    }, 1000)
    if(timer === 0){
      setTimeLeft(true)
      setTimeUp(true)
    }

    return () => { 
       clearTimeout(time)
    }


   }, [timer]);

  return (
    <>
    {timeLeft ? <span>Time Up!</span> : <span>{timer} seconds left </span>}
    </>
  );
};

export default Countdown;