//import React, { Component } from 'react'
// eslint-disable-next-line
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
<<<<<<< HEAD
import PVProfile from "./component/PVProfile";
=======
import AdminDashboard from "./component/AdminDashboard";

>>>>>>> a7c3686f0d719b71262eab48ffd76354d7859187

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
<<<<<<< HEAD
          <Route exact path="/pvprofile" component={PVProfile}></Route>
=======
          <Route exact path="/admindashboard" component={AdminDashboard}></Route>
>>>>>>> a7c3686f0d719b71262eab48ffd76354d7859187
        </Switch>

        <FooterComponent></FooterComponent>
      </Router>
      <ToastContainer autoclose={2500} theme="dark" limit={3} className="toast-position"/>
    </div>
  );
}

export default App;
