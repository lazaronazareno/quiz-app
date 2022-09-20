import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import arrow  from '../../utils/icon/arrow.png'
import './styles.css'

const Ranking = () => {
  const [data, setData] = useState();
  console.log(data)
  if(data){
    data.sort((a,b) => b.score - a.score)
  }

  useEffect(() => {
    const ranking = JSON.parse(localStorage.getItem('scoreList'))
    setData(ranking)
  },[])
  return (
    <div className='ranking-container'>
      <div className='ranking-title__container'>
        <span className='ranking-title'>Ranking</span>
        <Link to='/'>
          <img src={arrow} alt="Arrow icons created by Kirill Kazachek - Flaticon" />
        </Link>
      </div>
      {data && (
        <table className="table">
        <thead className='table-head'>
          <tr className='table-titles'>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Puntuacion</th>
          </tr>
        </thead>
        <tbody className='table-item'>
          {data.map(data => (
            <tr className='table-item-titles' key={data.date}>
              <td>{data.name}</td>
              <td>{data.date}</td>
              <td className='table-item__number'>{data.score}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
      {(!data || data.length === 0) && (
        <span>No hay Puntuaciones</span>
      )}
    </div>
  )
}

export default Ranking;