import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header(){
  return(
    <div className='header'>
      <div>
        <Link to='/' className='link-title'>
          <h1 className='title'>EL HERALDO</h1>
        </Link>
      </div>
      <div className='group-btn'>
        <Link to={`/login`}>
          <button>Login</button>
        </Link>
        <Link to={`/registro_usuario`}>
          <button>Registro</button>
        </Link>
      </div>
    </div>
  )
}