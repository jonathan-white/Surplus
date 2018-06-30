import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Market from "../pages/Market";
import ShoppingCart from "../pages/ShoppingCart";
import NoMatch from '../pages/404';
import Navigation from "./Navigation";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Footer from "./Footer";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Navigation isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route exact path="/" component={Market} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/checkout" component={ShoppingCart} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;
