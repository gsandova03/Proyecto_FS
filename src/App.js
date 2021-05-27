import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import React, {useEffect, useState} from 'react'

import Register from 'Pages/Register';
import Login from './Pages/Login'
import Home from './Pages/Home'
import FullNew from 'Pages/FullNews';

import newsContext from './Context/newsContext'

function App() {

  const [noticia, setNoticia] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:4000/')
      .then(res => res.json()
      .then(data => setNoticia(data)))
  }, [])

  console.log(noticia)
  return (
    <newsContext.Provider value={noticia}>
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Home}/>
          <Route path='/noticia/:id_noticia' component={FullNew} />
          <Route path='/login' component={Login} />
          <Route path='/registro_usuario' component={Register} />
        </Switch>
      </Router>
    </newsContext.Provider>
  );
}

export default App;
