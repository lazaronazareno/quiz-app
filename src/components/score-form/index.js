import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ScoreForm = ({countWinner}) => {
  const [score, setScore] =useState({})
  const [scoreList, setScoreList] = useState([])
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const OnSubmit = (e) => {
    e.preventDefault();
    const newDate = new Date();
    const currentDate = newDate.getFullYear()+'/'+(newDate.getMonth()+1)+'/'+newDate.getDate() + '-' + newDate.getHours()+':'+newDate.getMinutes()+'-p-'+countWinner;
    if(name !== ''){
      const obj = {date:currentDate, name:name, score: countWinner};
      setScore(obj)
      setScoreList([...scoreList, obj]);
      setSuccess(true);
    } else {
      setError(true);
    }
  }

  const onChange = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem('scoreList'))
    if(!scores) {
      localStorage.setItem('scoreList', JSON.stringify(scoreList)) 
    } else if(scoreList && scoreList.length > 0) {
      console.log('useEffect', scoreList)
      localStorage.setItem('scoreList', JSON.stringify(scoreList)) 
    }
    setScoreList(scores)
  }, [score]);

  return (
    <main className='score-form__container'>
      <h1 className='score-form__title'>Juego Terminado</h1>
      <h1 className='score-form__subtitle'>Puntuación : <strong>{countWinner}</strong></h1>
      {!error && !success && ( 
        <form className='score-form__form' onSubmit={OnSubmit}>
          <h1>Registrar Puntuación :</h1>
          <div>
            <label htmlFor='name'>Nombre : </label>
            <input 
                type='text' 
                id='name'
                onChange={onChange}
              />
          </div>
          <button type='submit' style={{border:'none'}}>Enviar</button>
        </form>
      )}
      {error && <h1>Error</h1>}
      {success && (
        <div className='score-form__form'>
          <h1>Puntuacion Registrada</h1>
          <Link to='/ranking'>Ver Puntuaciones</Link>
        </div>
      )}
    </main>
  );
};

export default ScoreForm;