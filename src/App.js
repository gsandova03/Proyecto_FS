import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Register from 'Pages/Register';
import Login from './Pages/Login'
import Home from './Pages/Home'
import FullNew from 'Pages/FullNews';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/login' component={Login} />
        <Route path='/registro' component={Register} />
        <Route path='/detalle_noticia' component={FullNew} />
      </Switch>
    </Router>
  );
}

export default App;
