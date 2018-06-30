import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./NavigationNew";
import LandingPage from "../pages/Landing";
import SignupPage from "../pages/AppSignUp";
import SigninPage from "../pages/AppSignIn";
import ForgotPasswordPage from "../pages/ForgotPW";
import HomePage from "../pages/Home";
import AccountPage from "../pages/Profile";
import Footer from "./Footer";
import ShoppingCart from "../pages/ShoppingCart";
import NoMatch from '../pages/404';
import './App.css';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authUser: null,
      cartId: 1,
    }
  };

  // Check if the user's auth state changes
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <Switch>
            <Route exact path={routes.LANDING} component={() => <LandingPage />}/>
            <Route exact path={routes.HOME} component={() => <HomePage />}/>
            <Route exact path={routes.ACCOUNT} component={() => <AccountPage />}/>
            <Route exact path={routes.CHECKOUT} component={() => <ShoppingCart />}/>
            <Route exact path={routes.SIGN_IN} component={() => <SigninPage />}/>
            <Route exact path={routes.SIGN_UP} component={() => <SignupPage />}/>
            <Route exact path={routes.PASSWORD_FORGET} component={() => <ForgotPasswordPage />}/>
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;
