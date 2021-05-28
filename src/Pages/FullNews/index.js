import React, {useEffect, useState} from 'react'
import './styles.css'

import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import Detail from 'Components/DetailNews/index'
import { useParams } from 'react-router'


export default function FullNew(){

  const {id_noticia} = useParams();

  /*

    Para poder imprimir los detalles de la noticia deseado se utiliza un hook de react-router, el cual lee la url del componente y en este caso recibe el id de la noticia que se quiere visualizar.
    Se utiliza este id para hacer el llamado a la API con ese parametro, y al final renderizar el componente

  */

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