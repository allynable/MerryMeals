import React, { Component } from "react";
import "../css/HeaderComponent.css";
import logo from "../image/mow-logo.png";

export class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
          <div class="navbar-logo">
            <a href="/"><img src={logo} alt="Logo" /></a>
          </div>
          <div class="navbar-items">
            <ul class="navbar-menu">
              <li>
                <a href="/" class="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="..." class="navbar-link">
                  Meals
                </a>
              </li>
              <li>
                <a href="/donate" class="navbar-link">
                  Donate
                </a>
              </li>
              <li class="navbar-dropdown">
                <a href="..." class="navbar-link">
                  Register
                </a>
                <div class="navbar-dropdown-content">
                  <a href="/memregistration">Member/Caregivers</a>
                  <a href="...">Member/Caregivers</a>
                  <br></br>
                  <a href="/pvregistration">Partner/Volunteer</a>
                </div>
              </li>
              <li class="navbar-dropdown">
                <a href="..." class="navbar-link">
                  Login
                </a>
                <div class="navbar-dropdown-content">
                  <a href="/login">Member/Caregivers</a>
                  <br></br>
                  <a href="/pvlogin">Partner/Volunteer</a>
                </div>
              </li>
            </ul>
            <div class="navbar-search">
              <input
                type="text"
                placeholder="Search"
                class="navbar-search-input"
              />
              <button class="navbar-search-button">Search</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
