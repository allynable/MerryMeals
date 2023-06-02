//import React, { Component } from 'react'
// eslint-disable-next-line
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import AdminDashboard from "./component/AdminDashboard";


function App() {
  return (
    <div className="App">
      <Helmet>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBeP41nTw8QroOfvcCFR9bKIC-GUW7BLcs"></script>
      </Helmet>
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
          <Route exact path="/admindashboard" component={AdminDashboard}></Route>
        </Switch>

        <FooterComponent></FooterComponent>
      </Router>
      <ToastContainer autoclose={2500} theme="dark" limit={3} className="toast-position"/>
    </div>
  );
}

export default App;
