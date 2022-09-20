import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {

  return (
    <div className='home-container'>
      <Link to='/questions'>Play</Link> 
      <Link to='/rankings'>Rankings</Link>
    </div>
  );
};

export default Home;