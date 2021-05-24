import { Link } from "react-router-dom";


export default function Register(){
  return(
    <div className='page'>
      <div className='container_form'>
          <h3>Registro</h3>
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
                <label>Comfirmar Contraseña</label> 
                  <input type='password' />
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