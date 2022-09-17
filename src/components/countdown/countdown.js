import React, { useEffect, useState } from 'react';
import './styles.css';

const CountdownA = ({setTimeUp, seconds, setSeconds}) => {
  const [timeLeft, setTimeLeft] = useState(false)

  useEffect(() => {
    const time = setInterval(function() {
        setSeconds(seconds - 1);
    }, 500)
    if(seconds <= 0){
      setTimeLeft(true)
      setTimeUp(true)
    }

    return () => { 
       clearInterval(time)
       setTimeLeft(false)
       setTimeUp(false)
    }
   }, [seconds]);

  return (
    <>
      {timeLeft ? 
        <div className="expired-notice">
          <span>Time Up!</span>
        </div>  :
        <div className="show-counter">
          <span>{seconds}</span>
        </div>
      }
    </>
  );
};

export default CountdownA;