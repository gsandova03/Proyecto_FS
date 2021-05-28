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
    </>
  )
}