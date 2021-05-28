import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles.css'


export default function EditNews(){

  const {newsList} = useSelector((state) => state)

  return(
    <div className="editar_news">
      <div class="container mt-5">
        <Link to={"/"} className="btn btn-inicio">Volver al Inicio</Link>
        <Link to={"/registro_noticia"} className="btn btn-inicio">Agregar Noticia</Link>
          <table className="table">
            <thead className="text-center">
              <th>Titulo</th>
              <th>Resumen</th>
            </thead>
            <tbody>
              {
                newsList.map(data =>(
                  <tr>
                    <th>{data.nombre}</th>
                    <th>{data.resumen}</th>
                    <th className="d-flex">
                      <a className="btn btn-editar">Editar</a>
                      <a className="btn btn-eliminar">Eliminar</a>
                    </th>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
    </div>
  )
}