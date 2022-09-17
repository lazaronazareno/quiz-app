import React from 'react';
import CountdownTimer from './countdownTimer';
import './styles.css';


export default function Countdown() {
  const THIRTY_SEGS_IN_MS = 30 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThirtySegs = NOW_IN_MS + THIRTY_SEGS_IN_MS;
  return (
    <CountdownTimer targetDate={dateTimeAfterThirtySegs} />
  );
};
