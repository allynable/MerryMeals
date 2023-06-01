import React, { Component } from "react";
import "../css/HeaderComponent.css";
import logo from "../image/logo.jpg";

export class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar-items">
            <ul className="navbar-menu">
              <li>
                <a href="/" className="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="..." className="navbar-link">
                  Meals
                </a>
              </li>
              <li>
                <a href="/donate" className="navbar-link">
                  Donate
                </a>
              </li>
              <li className="navbar-dropdown">
                <a href="..." className="navbar-link">
                  Register
                </a>
                <div className="navbar-dropdown-content">
                  <a href="/memregistration">Member/Caregivers</a>
                  <a href="...">Member/Caregivers</a>
                  <br></br>
                  <a href="/pvregistration">Partner/Volunteer</a>
                </div>
              </li>
              <li className="navbar-dropdown">
                <a href="..." className="navbar-link">
                  Login
                </a>
                <div className="navbar-dropdown-content">
                  <a href="...">Member/Caregivers</a>
                  <br></br>
                  <a href="/pvlogin">Partner/Volunteer</a>
                </div>
              </li>
            </ul>
            <div className="navbar-search">
              <input
                type="text"
                placeholder="Search"
                className="navbar-search-input"
              />
              <button className="navbar-search-button">Search</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
