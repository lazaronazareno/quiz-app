import React from 'react';
import DateTimeDisplay from './dateTimeDisplay';
import { useCountdown } from '../../hooks/useCountdown';
import './styles.css';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Time Up!</span>
    </div>
  );
};

const ShowCounter = ({ seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [seconds] = useCountdown(targetDate);

  if (seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
