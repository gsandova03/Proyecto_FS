import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import React from 'react'

import Register from 'Pages/Register';
import Login from './Pages/Login'
import Home from './Pages/Home'
import FullNew from 'Pages/FullNews';
import EditNews from 'Pages/EditNews';
import AgregarNoticia from 'Pages/RegistroNoticia';

/*
------------------Colaboradores:
            Alejandro Cuello
            Gabriel Sandoval
*/


function App() {
  return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Home}/>
          <Route exact={true} path='/noticia/:id_noticia' component={FullNew} />
          <Route exact={true} path='/login' component={Login} />
          <Route exact={true} path='/registro_usuario' component={Register} />
          <Route exact={true} path='/editar_noticias' component={EditNews} />
          <Route exact={true} path='/registro_noticia' component={AgregarNoticia} />
        </Switch>
      </Router>
  );
}

export default App;
