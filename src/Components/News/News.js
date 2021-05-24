import New from 'Components/New/index'
import React from 'react'
import './styles.css'
import {NEWS} from '../../Services/noticias'

export default function News(){
  return(
    <div className='content_news'>
      {
        NEWS.map( data => (
          <div className='container_news'>
            <New titulo={data.titulo} imagen={data.imagen} descripcion={data.descripcion} date={data.date} />
          </div>
        ))
      }
    </div>
  )
}