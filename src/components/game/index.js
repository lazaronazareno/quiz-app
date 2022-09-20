import React, { useEffect, useState } from 'react';
import QuestionForm from '../questionForm';
import { questions } from '../questions';
import './styles.css'
import Countdown from '../countdown';
import ScoreForm from '../score-form';
import arrow  from '../../utils/icon/arrow.png'
import { Link } from 'react-router-dom';

const Game = () => {
  const [questionsList, setQuestionsList] = useState(questions)
  const [countWinner, setCountWinner] = useState(0)
  const [timeUp, setTimeUp] = useState(false)
  const [seconds, setSeconds] = useState(30)
  const[countIndex, setCountIndex] = useState(0)

  useEffect(() => {
    let shuffled = questionsList.map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
    let newList = shuffled.slice(0,10)
    setQuestionsList(newList)
  },[])
  console.log(countIndex)

  return (
    <main className='game-container'>
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
            {countIndex <= 10 && <Countdown setTimeUp={setTimeUp} seconds={seconds} setSeconds={setSeconds}/> }
            <Link className='game-back__button' to='/'>
              <img src={arrow} alt="Arrow icons created by Kirill Kazachek - Flaticon" />
            </Link>
        </div>
      ))}
      <div>
        {countIndex > 10 && <ScoreForm countWinner={countWinner} /> }
      </div>
    </main>
  );
};

export default Game;