import React, {useEffect, useState} from 'react'
import './styles.css'

import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import Detail from 'Components/DetailNews/index'
import { useParams } from 'react-router'


export default function FullNew(){
  const {id_noticia} = useParams();

  const [noticia, setNoticia] = useState([]);

  useEffect(()=>{
    fetch(`http://127.0.0.1:4000/noticia/${id_noticia}`)
      .then(res => res.json()
      .then(data => setNoticia(data)))
  }, [])


  return(
    <>
      <Header/>
      <Navbar/>
      <div className='content'>
        <Detail key={noticia.id} nombre={noticia.nombre} imagen={noticia.imagen} descripcion={noticia.descripcion} />
      </div>
    </>
  )
}