import React, { useState } from 'react';
import Countdown from '../countdown';

const QuestionForm = ({qa}) => {
  const [selectOption, setSelectOption] = useState()
  const [winner, setWinner] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
  const [timeUp, setTimeUp] = useState(false)
  console.log(timeUp)
  const correct = qa['correctAnswer']

  const OnSubmit = (e) => {
    e.preventDefault()
    if (selectOption === e.target[correct -1].value) {
      setWinner(true)
    } else {
      setIncorrect(true)
    }
  }

  const onChange = (e) => {
    setSelectOption(e.target.value)
    setWinner(false)
    setIncorrect(false)
  }
  return (
    <form onSubmit={OnSubmit}>
      <h1>{qa['question']}</h1>
      <input 
        type='radio' 
        id='1' 
        value={qa['1']}
        checked={selectOption === qa['1']}
        onChange={onChange}
      />
      <label htmlFor='1'>{qa['1']}</label>
      <input 
        type='radio' 
        id='2' 
        value={qa['2']}
        checked={selectOption === qa['2']}
        onChange={onChange}
      />
      <label htmlFor='2'>{qa['2']}</label>
      <input 
        type='radio' 
        id='3' 
        value={qa['3']}
        checked={selectOption === qa['3']}
        onChange={onChange}
      />
      <label htmlFor='3'>{qa['3']}</label>
    <button>send</button>
    {winner && (
      <h1>correct!</h1>
    )}
    {incorrect && (
      <h1>incorrect!</h1>
    )}
    <Countdown setTimeUp={setTimeUp} seconds={30}/>
  </form>
  );
};

export default QuestionForm;