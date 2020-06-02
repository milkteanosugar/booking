import React from 'react';
import logo from './logo.svg';
import './App.css';

import Routes from './routers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const root = (
  <Router>
    <Route path='/' component={Routes}></Route>
  </Router>
);

function App(){

    return(
      <Router>
        <Route path='/' component={Routes}></Route>
      </Router>
    )
}

export default App;
