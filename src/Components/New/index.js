import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function New({ titulo, imagen, date }){

  return(
    <div className='new'>
      <Link to={`/noticia/`}>{titulo}</Link>
      <img src={imagen} alt='imagen noticia' />
      <p className='date'>{date}</p>
      {/* <button><Link to='/detalle_noticia'> Detalle </Link></button> */}
    </div>
  )
}