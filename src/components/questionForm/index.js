import React, { useState, useEffect } from 'react';
import './styles.css'

const QuestionForm = ({qa, count, winnerCount, secondsLeft, setSecondsLeft, timeUp, setTimeUp, index, countIndex, setCountIndex}) => {
  const [selectOption, setSelectOption] = useState()
  const [winner, setWinner] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
  const correct = qa['correctAnswer']
  const [showResult, setShowResult] = useState(true)

  const OnSubmit = (e) => {
    e.preventDefault()
    if (selectOption === e.target[correct -1].value) {
      setWinner(true)
      winnerCount(count + secondsLeft)
      setSecondsLeft(30)
    } else {
      setIncorrect(true)
      winnerCount(count)
      setSecondsLeft(30)
    }
    setCountIndex(countIndex + 1)
  }

  const onChange = (e) => {
    setSelectOption(e.target.value)
  }

  useEffect(() => {
    setSelectOption(null)
    console.log(countIndex)
    console.log('winner', winner,'incorrect', incorrect, index )
    if(timeUp && index === 0) {
      setIncorrect(true)
      setWinner(false)
      setSecondsLeft(30)
      setCountIndex(countIndex + 1)
    }
    if(timeUp && countIndex === index) {
      setIncorrect(true)
      setWinner(false)
      setSecondsLeft(30)
      setCountIndex(countIndex + 1)
    }
    return () => { 
      setTimeUp(false);
      setSelectOption(null)
   }
   }, [timeUp, countIndex, incorrect, winner]);

   useEffect(()=>{
    setTimeout(function() {
      setShowResult(false)
      }, 3000);
      return () => { 
        setShowResult(true)
     }
  }, [winner, incorrect])

  return (
    <main className='relative'>
      {(winner || incorrect) &&
        showResult ? <>{ incorrect ? <div className='result-container incorrect'><h1>incorrecto. Respuesta correcta : {qa[correct]}</h1></div> : <div className='result-container correct'><h1>correct</h1></div>}</> : <></>
      }
      {!winner && !incorrect &&
        <form onSubmit={OnSubmit} className={(winner || incorrect) ? `form-container form--submit` : 'form-container'}>
          <h1>{qa['question']}</h1>

          <input 
            type='radio' 
            id={`1-${index}`}
            value={qa['1']}
            checked={selectOption === qa['1']}
            onChange={onChange}
          />
          <label className={`input-container ${selectOption === qa['1'] ? 'selected' : ''}`} htmlFor={`1-${index}`}>{qa['1']}
          </label>

          <input 
            type='radio' 
            id={`2-${index}`} 
            value={qa['2']}
            checked={selectOption === qa['2']}
            onChange={onChange}
          />
          <label className={`input-container ${selectOption === qa['2'] ? 'selected' : ''}`} htmlFor={`2-${index}`}>{qa['2']}
          </label>

          <input 
            type='radio' 
            id={`3-${index}`}
            value={qa['3']}
            checked={selectOption === qa['3']}
            onChange={onChange}
          />
          <label className={`input-container ${selectOption === qa['3'] ? 'selected' : ''}`} htmlFor={`3-${index}`}>{qa['3']}
          </label>

          <button disabled={timeUp} type='submit'>send</button>
        </form>
      }
    </main>
  );
};

export default QuestionForm;