import React from 'react'
import './styles.css'

export default function Detail({ nombre, imagen, descripcion }){

  return(
    <div className='detail_new'>
      <div>
        <h1 className='new_title'>{nombre}</h1>
      </div>
      <div>
        <img src={imagen}/>
      </div>
      <div>
        <p className='paragraph_new'>{descripcion}</p>
      </div>
    </div>
  )
}