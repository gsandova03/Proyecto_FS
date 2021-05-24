import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'



export default function Login(){
  return(
    <div className='page'>
      <div className='container_form'>
          <h3>Login</h3>
          <form action="">
              <div>
                  <label>Usuario</label>
                  <input type="text" name="fullname"/>
              </div>
              <div>
                  <label>Email Adress</label>
                  <input type="email" name="email"/>
              </div>
              <div>
                <label>Contraseña:</label> 
                  <input type='password' />
              </div>
              <div>
                  <button>Iniciar</button>
              </div>
              <div>
                <p>No tienes cuenta? <Link to="/registro">Registrate!</Link> </p>
              </div>
          </form>
      </div>
    </div>
  )
}