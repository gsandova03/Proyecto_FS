import New from 'Components/New/index'
import React, { useEffect } from 'react'
import './styles.css'

import { useDispatch, useSelector } from 'react-redux'
import {setNew} from 'actions'

export default function News(){


  const dispatch = useDispatch();
  const {newsList} = useSelector( state => state )

  useEffect(()=>{
    fetch('http://127.0.0.1:4000/')
      .then(res => res.json()
      .then(data => {
        dispatch(setNew(data))
      }))
  }, [])

  return(
    <div className='content_news'>
      {
        newsList.map( (data) => (
          <div className='container_news'>
            <New key={data.id} id={data.id} titulo={data.nombre} imagen={data.imagen} descripcion={data.descripcion} date={data.fecha_creacion} />
          </div>
        ))
      }
    </div>
  )
}