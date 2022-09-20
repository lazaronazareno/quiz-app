import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import question from '../../utils/icon/question.png'

const Home = () => {

  return (
    <div className='home-container'>
      <img src={question} alt='Question icons created by Flat-icons-com - Flaticon' />
      <h1>Quiz Game</h1>
      <Link to='/questions'>Harry Potter Quiz</Link> 
      <Link to='/ranking'>Ranking</Link>
    </div>
  );
};

export default Home;