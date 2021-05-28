import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'


export default function Login(){

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("token");


  const handleClick = () => {
    const options = {
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        "usuario":usuario,
	      "password":password
      })
    }

    fetch("http://127.0.0.1:4000/login", options)
      .then(res =>{
          return res.json();
      })
      .then(data =>{
        localStorage.setItem("token", data.acces_token)
      })
      .catch(error => console.log(error))
  };

  return(
    <div className='page'>
      <div className='container_form'>
          <h3>Login</h3>
          {token && token != "" && token!=undefined
          ?
          (
            "Hola mundo "+ token
          ) :(
              <form action="">
                  <div>
                      <label>Usuario</label>
                      <input type="text" name="name" value={usuario} onChange={(e) =>{setUsuario(e.target.value)}} />
                  </div>
                  <div>
                    <label>Contraseña:</label> 
                      <input type='password' name="password" value={password} onChange={(e) =>{setPassword(e.target.value)}} />
                  </div>
                  <div>
                      <button onClick={handleClick}>Iniciar</button>
                  </div>
                  <div>
                    <p>No tienes cuenta? <Link to="/registro_usuario">Registrate!</Link> </p>
                  </div>
              </form>
          )}
      </div>
    </div>
  )
}