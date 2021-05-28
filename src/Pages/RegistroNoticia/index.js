import React , { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'

export default function AgregarNoticia(){

  const [nombreNoticia, setNombreNoticia] = useState("");
  const [categoria, setCategoria] = useState("");
  const [resumen, setResumen] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleClick = () => {
    const options = {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        "categoria": categoria,
        "descripcion": descripcion,
        "imagen": imagen,
        "nombre": nombreNoticia,
        "resumen": resumen
      })
    }

    fetch("http://127.0.0.1:4000/registro_noticia", options)
      .then(res =>{
          return res.json();
      })
      .catch(error => console.log(error))
  };


  return(
    <>
      <div className='container'>
          <Link to="/editar_noticias" className="btn btn-primary">Volver a las noticias</Link>
          <form className="form-control" >
              <div>
                  <label>Nombre Noticia</label><br/>
                  <input type="text" name="nombre" className="form-control" onChange={(e) =>{setNombreNoticia(e.target.value)}} />
              </div>
              <div>
                  <label>Categoria</label><br/>
                  <input type="text" name="categoria" className="form-control" onChange={(e) =>{setCategoria(e.target.value)}} />
              </div>
              <div>
                <label>Imagen</label><br/>
                  <input type='text' name="imagen" className="form-control" onChange={(e) =>{setImagen(e.target.value)}} />
              </div>
              <div>
                  <label>Resumen</label><br/>
                  <textarea type="textarea" name="resumen" className="form-control" onChange={(e) =>{setResumen(e.target.value)}} />
              </div>
              <div>
                <label>Descripcion</label><br/> 
                  <textarea type='text' name="descripcion" className="form-control" onChange={(e) =>{setDescripcion(e.target.value)}} />
              </div>
              <div>
                  <button className="btn btn-success" onClick={handleClick} >Crear Noticia</button>
              </div>
          </form>
      </div>
    </>
  )
}