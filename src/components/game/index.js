import React, { useEffect, useState } from 'react';
import QuestionForm from '../questionForm';
import { questions } from '../questions';
import './styles.css'
import CountdownA from '../countdown/countdown';
import ScoreForm from '../score-form';

const Game = () => {
  const [questionsList, setQuestionsList] = useState(questions)
  const [countWinner, setCountWinner] = useState(0)
  const [timeUp, setTimeUp] = useState(false)
  const [seconds, setSeconds] = useState(5)
  const[countIndex, setCountIndex] = useState(0)

  useEffect(() => {
    let shuffled = questionsList.map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
    let newList = shuffled.slice(0,10)
    setQuestionsList(newList)
  },[])

  return (
    <div className='game-container'>
      {questionsList.map((q, index) => (
        <div key={index}>
          <QuestionForm
            qa={q}
            count={countWinner}
            winnerCount={setCountWinner}
            secondsLeft={seconds}
            setSecondsLeft={setSeconds}
            timeUp={timeUp}
            setTimeUp={setTimeUp}
            index={index}
            countIndex={countIndex}
            setCountIndex={setCountIndex}
            />
            {countIndex < 10 && <CountdownA setTimeUp={setTimeUp} seconds={seconds} setSeconds={setSeconds}/> }
        </div>
      ))}
      <div>
        {countIndex >= 10 && <ScoreForm countWinner={countWinner} /> }
      </div>
    </div>
  );
};

export default Game;