import React , { useState } from "react";
import { Link } from "react-router-dom";


export default function Register(){

  const [nombreCompleto, setNombreCompleto] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const options = {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        "usuario": usuario,
        "correo": email,  
        "nombre": nombreCompleto, 
        "password": password, 
        "telefono": telefono 
      })
    }

    fetch("http://127.0.0.1:4000/registro_usuario", options)
      .then(res =>{
          return res.json();
      })
      .catch(error => console.log(error))
  };


  return(
    <div className='page'>
      <div className='container_form'>
          <h3>Registro</h3>
          <form method='POST' >
              <div>
                  <label>Nombre Completo</label>
                  <input type="text" name="nombre" onChange={(e) =>{setNombreCompleto(e.target.value)}} />
              </div>
              <div>
                  <label>Usuario</label>
                  <input type="text" name="usuario" onChange={(e) =>{setUsuario(e.target.value)}} />
              </div>
              <div>
                  <label>Email Adress</label>
                  <input type="email" name="correo" onChange={(e) =>{setEmail(e.target.value)}} />
              </div>
              <div>
                <label>Telefono</label> 
                  <input type='text' name="telefono" onChange={(e) =>{setTelefono(e.target.value)}} />
              </div>
              <div>
                <label>Contraseña</label> 
                  <input type='password' name="password" onChange={(e) =>{setPassword(e.target.value)}} />
              </div>
              <div>
                  <button onClick={handleClick} >Registrar</button>
              </div>
              <div>
                <p> Si ya tienes cuenta,  <Link to="/login">Inicia sesion</Link> </p>
              </div>
          </form>
      </div>
    </div>
  )
}