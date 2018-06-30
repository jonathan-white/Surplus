import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Market from "../pages/Market";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import ShoppingCart from "../pages/ShoppingCart";
import NoMatch from '../pages/404';
import Navigation from "./Navigation";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Signout from "../pages/Signout";
import ForgotPW from "../pages/ForgotPW";
import Footer from "./Footer";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true,
      cartId: 1,
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Navigation isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/checkout" component={ShoppingCart} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/pw-forget" component={ForgotPW} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;
