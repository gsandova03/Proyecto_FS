import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function New({ id , titulo, imagen, date }){

  return(
    <div className='new'>
      <Link to={`/noticia/${id}`}>{titulo}</Link>
      <img src={imagen} alt='imagen noticia' />
      <p className='date'>{date}</p>
      {/* <button><Link to='/detalle_noticia'> Detalle </Link></button> */}
    </div>
  )
}