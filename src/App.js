import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import React from 'react'

import Register from 'Pages/Register';
import Login from './Pages/Login'
import Home from './Pages/Home'
import FullNew from 'Pages/FullNews';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Home}/>
          <Route path='/noticia/:id_noticia' component={FullNew} />
          <Route path='/login' component={Login} />
          <Route path='/registro_usuario' component={Register} />
        </Switch>
      </Router>
  );
}

export default App;
