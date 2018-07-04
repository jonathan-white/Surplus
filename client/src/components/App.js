import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "../pages/Landing";
import SignupPage from "../pages/AppSignUp";
import SigninPage from "../pages/AppSignIn";
import ForgotPasswordPage from "../pages/ForgotPW";
import ChangePasswordPage from "../pages/PasswordChange";
import HomePage from "../pages/Home";
import AccountPage from "../pages/Profile";
import Footer from "./Footer";
import ShoppingCart from "../pages/ShoppingCart";
import SearchResults from "../pages/Results";
import NoMatch from '../pages/404';
import './App.css';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import API from "../utils/API";

function remove(array, index) {
	return array.filter((e,i) => i !== index);
}

class App extends React.Component {
  constructor(props){
    super(props);
    // sessionData = {
    //   sessionId: ...
    //   shoppingCart: ...
    // }
    this.state = { ...JSON.parse(localStorage.getItem('sessionData')) };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  };

  handleAddToCart = (product) => {
    console.log('Adding product to the cart:', product); //TODO: remove
    this.setState((prevState) => ({
      shoppingCart: [...prevState.shoppingCart, product]
    }));

    localStorage.setItem('sessionData',JSON.stringify(this.state));
  }

  handleRemoveFromCart = (index) => {
		const newCart = remove(this.state.shoppingCart, index);
		this.setState({shoppingCart: newCart});

		API.getSessionID()
      .then(res => {
        localStorage.setItem('sessionData',JSON.stringify({
          sessionId: res.data,
          shoppingCart: newCart,
        }));
      })
      .catch(err => console.log(err));
	}

  render() {
    console.log('App rendered');
    return(
      <Router>
        <div>
          <Navigation cartSize={this.state.shoppingCart.length} />
          <Switch>
            <Route exact path={routes.LANDING} component={() => <LandingPage
              handleAddToCart={this.handleAddToCart}/>} />
            <Route exact path={routes.HOME} component={() => <HomePage
              handleAddToCart={this.handleAddToCart}/>} />
            <Route exact path={routes.ACCOUNT} component={() => <AccountPage />}/>
            <Route exact path={routes.CHECKOUT} component={() => <ShoppingCart
              handleRemoveFromCart={this.handleRemoveFromCart}
              shoppingCart={this.state.shoppingCart}/>}/>
            <Route exact path={routes.SIGN_IN} component={() => <SigninPage />}/>
            <Route exact path={routes.SIGN_UP} component={() => <SignupPage />}/>
            <Route exact path={routes.PASSWORD_FORGET} component={() => <ForgotPasswordPage />}/>
            <Route exact path={routes.PASSWORD_CHANGE} component={() => <ChangePasswordPage />}/>
            <Route exact path={routes.SEARCH} component={() => <SearchResults />}/>
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
};

export default withAuthentication(App);
