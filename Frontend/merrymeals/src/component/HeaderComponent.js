import React, { Component } from 'react'
import '../css/HeaderComponent.css'
import logo from '../image/logo.jpg'


export class HeaderComponent extends Component {
  render() {
    return (
      <div>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src={logo} alt="Logo"/>
    </div>
    <div class="navbar-items">
      <ul class="navbar-menu">
        <li><a href="..." class="navbar-link">Home</a></li>
        <li><a href="..." class="navbar-link">Meals</a></li>
        <li class="navbar-dropdown">
          <a href="..." class="navbar-link">Register</a>
          <div class="navbar-dropdown-content">
            <a href="...">Member/Caregivers</a>
            <br></br>
            <a href="/pvregistration">Partner/Volunteer</a>
          </div>
        </li>
        <li class="navbar-dropdown">
          <a href="..." class="navbar-link">Login</a>
          <div class="navbar-dropdown-content">
            <a href="...">Member/Caregivers</a>
            <br></br>
            <a href="...">Partner/Volunteer</a>
          </div>
        </li>
      </ul>
      <div class="navbar-search">
        <input type="text" placeholder="Search" class="navbar-search-input"/>
        <button class="navbar-search-button">Search</button>
      </div>
    </div>
  </nav>
      </div>
    )
  }
}

export default HeaderComponent