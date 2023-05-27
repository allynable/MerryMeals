//import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import HeaderComponent from './component/HeaderComponent'

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent></HeaderComponent>


      </Router>
      </div>
        
    
  );
}

export default App;
