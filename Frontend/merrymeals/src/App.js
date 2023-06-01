//import React, { Component } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import HomeComponent from "./component/HomeComponent";
import PVRegisterComponent from "./component/PVRegisterComponent";
import PVLoginComponent from "./component/PVLogionComponent";
import MemberSignup from "./component/MemberSignup";
import DonateComponent from "./component/DonateComponent";
import FoodSafetyGuide from "./component/FoodSafetyGuide";
import PrivacyPolicy from "./component/PrivacyPolicy";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent></HeaderComponent>

        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/memregistration" component={MemberSignup}></Route>
          <Route exact path="/donate" component={DonateComponent}></Route>
          <Route exact path="/pvregistration"component={PVRegisterComponent}></Route>
          <Route exact path="/pvlogin" component={PVLoginComponent}></Route>
          <Route exact path="/foodsafetyguide" component={FoodSafetyGuide}></Route>
          <Route exact path="/privacypolicy" component={PrivacyPolicy}></Route>
        </Switch>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
