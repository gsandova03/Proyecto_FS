import React, {useEffect, useState} from 'react'
import './styles.css'

import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import Detail from 'Components/DetailNews/index'
import { useParams } from 'react-router'


export default function FullNew(){

  const {id_noticia} = useParams();

  const [detalleNoticia, setDetalleNoticia] = useState([]);

  useEffect(()=>{
    fetch(`http://127.0.0.1:4000/noticia/${id_noticia}`)
      .then(res => res.json()
      .then(data => setDetalleNoticia(data)))
  }, [])

  console.log(detalleNoticia)

  return(
    <>
      <Header/>
      <Navbar/>
      <div className='content'>
        {
          detalleNoticia.map((data) =>(
            <Detail key={data.id} nombre={data.nombre} imagen={data.imagen} descripcion={data.descripcion}  />
          ))
        }
      </div>
      {/* <Header/>
      <Navbar/>
      <div className='content'>
        <div className='detail_new'>
          <div>
            <h1 className='new_title'>{noticia.titulo}</h1>
          </div>
          <div>
            <img src={noticia.imagen}/>
          </div>
          <div>
            <p className='paragraph_new'>{noticia.descripcion}</p>
          </div>
        </div>
      </div> */}
    </>
  )
}