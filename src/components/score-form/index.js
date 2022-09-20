import React from 'react';
import './styles.css';

const ScoreForm = ({countWinner}) => {
  console.log(countWinner)

  const OnSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  const onChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='score-form-container'>
      <h1>Quiz Over!</h1>
      <h1>Score : <strong>{countWinner}</strong></h1>
      <form onSubmit={OnSubmit}>
        <h1>Upload Score :</h1>
        <label htmlFor='name'>Name : </label>
        <input 
            type='text' 
            id='name'
            onChange={onChange}
          />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default ScoreForm;