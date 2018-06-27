import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Market from "./pages/Market";
import ShoppingCart from "./pages/ShoppingCart";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Market} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/checkout" component={ShoppingCart} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;