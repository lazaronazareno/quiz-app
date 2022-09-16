import React from 'react';
import CountdownTimer from './countdownTimer';
import './styles.css';


export default function Countdown({reset}) {
  const THREE_DAYS_IN_MS = 30 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
  );
};
