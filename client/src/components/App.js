import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "./pages/Landing";
import SignupPage from "./pages/AppSignUp";
import SigninPage from "./pages/AppSignIn";
import ForgotPasswordPage from "./pages/ForgotPW";
import ChangePasswordPage from "./pages/PasswordChange";
import HomePage from "./pages/Home";
import AccountPage from "./pages/Profile";
import Footer from "./Footer";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import SearchResults from "./pages/Results";
import AboutUs from './pages/About';
import AllProductsPage from "./pages/AllProducts";
import Product from "./pages/Product";
import Vision from "./pages/Vision";
import NoMatch from './pages/404';
import './App.css';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import moment from "moment";

const App = () => {
	const currentTime = moment();
  return(
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={routes.LANDING} component={() => <LandingPage />} />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
          <Route exact path={routes.CART} component={() => <ShoppingCart />} />
					<Route exact path={routes.CHECKOUT} component={() => <Checkout />}  />
          <Route exact path={routes.SIGN_IN} component={() => <SigninPage />} />
          <Route exact path={routes.SIGN_UP} component={() => <SignupPage />} />
          <Route exact path={routes.PASSWORD_FORGET} component={() =>
						<ForgotPasswordPage />}
					/>
          <Route exact path={routes.PASSWORD_CHANGE} component={() =>
						<ChangePasswordPage />}
					/>
          <Route exact path={routes.SEARCH} component={() =>
						<SearchResults key={currentTime}/>}/>
					<Route exact path={routes.ABOUT} component={() => <AboutUs />}/>
					<Route exact path={routes.VISION} component={() => <Vision />}/>
          <Route exact path={routes.PRODUCTS} component={() => <AllProductsPage />} />
					<Route exact path={routes.PRODUCT} component={(props) =>
						<Product productId={props.match.params.id} />} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
