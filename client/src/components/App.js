import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./NavigationNew";
import LandingPage from "../pages/Landing";
import SignupPage from "../pages/AppSignUp";
import SigninPage from "../pages/AppSignIn";
import ForgotPasswordPage from "../pages/ForgotPW";
import ChangePasswordPage from "../pages/PasswordChange";
import HomePage from "../pages/Home";
import AccountPage from "../pages/Profile";
import Footer from "./Footer";
import ShoppingCart from "../pages/ShoppingCart";
import NoMatch from '../pages/404';
import './App.css';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import API from "../utils/API";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sessionId: '',
      shoppingCart: [],
    }
    // this.addToCard = this.addToCard.bind(this);
  };

  // componentDidMount = () => {
  //
  //
  //   API.getSessionID()
  //   .then(res => {
  //     const sessionData = {
  //       sessionId: res.data,
  //       shoppingCart: this.state.shoppingCart,
  //     };
  //
  //     localStorage.setItem('sessionData',JSON.stringify(sessionData));
  //
  //   })
  //   .catch(err => console.log(err));
  // }

  // componentWillUnmount = () => {
  //   localStorage.removeItem('sessionData');
  // }

  addToCard = (product) => {
    // Add to the session's cart
    this.setState({
      shoppingCart: [...this.state.shoppingCart, product]
    });

    // Update the cart
    API.getSessionID()
      .then(res => {
        localStorage.setItem('sessionData',JSON.stringify({
          sessionId: res.data,
          shoppingCart: this.state.shoppingCart,
        }));
      })
      .catch(err => console.log(err));

  };

  render() {
    console.log('Shopping Cart:',this.state.shoppingCart);
    return(
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path={routes.LANDING} component={() => <LandingPage addToCard={this.addToCard} />}/>
            <Route exact path={routes.HOME} component={() => <HomePage addToCard={this.addToCard} />}/>
            <Route exact path={routes.ACCOUNT} component={() => <AccountPage />}/>
            <Route exact path={routes.CHECKOUT} component={() => <ShoppingCart />}/>
            <Route exact path={routes.SIGN_IN} component={() => <SigninPage />}/>
            <Route exact path={routes.SIGN_UP} component={() => <SignupPage />}/>
            <Route exact path={routes.PASSWORD_FORGET} component={() => <ForgotPasswordPage />}/>
            <Route exact path={routes.PASSWORD_CHANGE} component={() => <ChangePasswordPage />}/>
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>

    )
  }
};

export default withAuthentication(App);
