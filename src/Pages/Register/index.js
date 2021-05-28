import React , { useState } from "react";
import { Link } from "react-router-dom";


export default function Register(){

  const [nombre, setNombre] = useState("")
  const [usuario, setUsuario] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [password, setPasword] = useState("")

  const handleChange = async e =>{
    await setUsuario(e.target.name)
    console.log(usuario)
  }

  return(
    <div className='page'>
      <div className='container_form'>
          <h3>Registro</h3>
          <form method='POST' >
              <div>
                  <label>Nombre Completo</label>
                  <input type="text" name="nombre" onChange={handleChange}/>
              </div>
              <div>
                  <label>Usuario</label>
                  <input type="text" name="usuario" onChange={handleChange}/>
              </div>
              <div>
                  <label>Email Adress</label>
                  <input type="email" name="correo" onChange={handleChange}/>
              </div>
              <div>
                <label>Telefono</label> 
                  <input type='text' name="telefono" onChange={handleChange} />
              </div>
              <div>
                <label>Contraseña</label> 
                  <input type='password' name="password" onChange={handleChange} />
              </div>
              <div>
                  <button>Registrar</button>
              </div>
              <div>
                <p> Si ya tienes cuenta,  <Link to="/login">Inicia sesion</Link> </p>
              </div>
          </form>
      </div>
    </div>
  )
}