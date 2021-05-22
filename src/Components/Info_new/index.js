import React from 'react'
import './styles.css'

export default function New({titulo, imagen, descripcion, date }){
  return(
    <div className='new'>
      <h1>{titulo}</h1>
      <img src={imagen} alt='imagen noticia' />
      <p>{descripcion}</p>
      <p>{date}</p>
    </div>
  )
}