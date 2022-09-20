import React, { useEffect, useState } from 'react';
import './styles.css';

const Countdown = ({setTimeUp, seconds, setSeconds}) => {
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
    <div className='relative'>
      {timeLeft ? 
        <></>  :
        <div className="show-counter">
          <span>{seconds}</span>
        </div>
      }
    </div>
  );
};

export default Countdown;