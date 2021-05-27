import New from 'Components/New/index'
import React, {useEffect, useState} from 'react'
import './styles.css'

export default function News(){

  const [noticia, setNoticia] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:4000/')
      .then(res => res.json()
      .then(data => setNoticia(data)))
  }, [])

  return(
    <div className='content_news'>
      {
        noticia.map( data => (
          <div className='container_news'>
            <New key={data.id} titulo={data.nombre} imagen={data.imagen} descripcion={data.descripcion} date={data.fecha_creacion} />
          </div>
        ))
      }
    </div>
  )
}