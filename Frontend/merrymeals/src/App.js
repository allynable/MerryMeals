//import React, { Component } from 'react'
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'
import HomeComponent from './component/HomeComponent';
import PVRegisterComponent from './component/PVRegisterComponent'
import PVLoginComponent from './component/PVLogionComponent'


function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent></HeaderComponent>

      <Switch>
      <Route exact path='/' component={HomeComponent}></Route>
      <Route exact path='/pvregistration' component={PVRegisterComponent}></Route>
      <Route exact path='/pvlogin' component={PVLoginComponent}></Route>
      </Switch>

      <FooterComponent></FooterComponent>


      </Router>
      </div>
        
    
  );
}

export default App;
