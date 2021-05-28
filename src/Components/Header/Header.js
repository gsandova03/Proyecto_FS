import React from 'react'
import { Link , Redirect} from 'react-router-dom'
import './styles.css'

export default function Header(){

  const token = localStorage.getItem("token");

  const handleLogout = () =>{
    localStorage.removeItem("token")
  }

  return(
    <div className='header'>
      <div>
        <Link to='/' className='link-title'>
          <h1 className='title'>EL HERALDO</h1>
        </Link>
      </div>
      <div className='group-btn'>
        {token && token != "" && token != undefined
          ?(
            <>
              <Link to={`/editar_noticias`}>
                <button>Editar Noticias</button>
              </Link>
              <Link to={`/login`} onClick={handleLogout}>
                <button>Logout</button>
              </Link>
            </>
          )
          :(
            <Link to={`/login`}>
              <button>Login</button>
            </Link>
          )
        
        }
      </div>
    </div>
  )
}