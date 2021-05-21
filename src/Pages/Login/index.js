import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'



export default function Login(){
  return(
    <>
      <div className='container_form'>
        <form method='POST' className='login_form'>
          <div className='input_container'>
            <h1>Login</h1>
          </div>
          <div className='input_container'>
            <label>Nombre:</label><br/>
            <input type='text' name="nombre" placeholder='Digite el nombre'/><br/>
          </div>
          <div className='input_container'>
            <label>Contraseña:</label><br/>
            <input type='password' name='password' placeholder='Digite la Contraseña'/>
          </div>
          <div className='input_container'>
            <button type='submit'>Login</button>
          </div>
          <div className='input_container'>
            <p>No tines cuenta? <Link to="/registro">Registrate!</Link> </p>
          </div>
        </form>
      </div>
    </>
  )
}