import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import { Navbar, NavItem, Icon, Badge } from 'react-materialize';

import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import { auth } from '../firebase';

const Navigation = (props) => (
  <AuthUserContext.Consumer>
    { authUser => authUser
      ? <NavigationAuth cartSize={props.cartSize} history={props.history} authUser={authUser} />
      : <NavigationNonAuth cartSize={props.cartSize} history={props.history} />
    }
  </AuthUserContext.Consumer>
);

class NavigationAuth extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerms: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.history.push({
      pathname: routes.SEARCH,
      search: `?q=${this.state.searchTerms}`
    });
  };

  render() {
    return (
      <Navbar name="top" brand='Surplus Market' className="indigo darker-4" right style={{height: '75px'}}>
        <li>
          <form className="searchForm" onSubmit={this.handleSubmit}>
            <input
              value={this.state.searchTerms}
              className="searchbox"
              name="searchTerms"
              type="text"
              placeholder="Search..."
              onChange={this.handleChange}
            />
            <input className="searchBtn" type="submit" value="Go" />
          </form>
        </li>
        <NavItem href={routes.ACCOUNT}>
          <Icon>person</Icon>
        </NavItem>
        <NavItem href={routes.CART} className="navitem-shopping-cart">
          <Icon>shopping_cart</Icon>
          <Badge className="cart-badge">{this.props.cartSize}</Badge>
        </NavItem>
        <NavItem onClick={auth.doSignOut}>
          Sign Out
        </NavItem>
      </Navbar>
    );
  };
};

class NavigationNonAuth extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerms: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.history.push({
      pathname: routes.SEARCH,
      search: `?q=${this.state.searchTerms}`
    });
  };

  render() {
    return (
      <Navbar name="top" brand='Surplus Market' className="indigo darker-4" right style={{height: '75px'}}>
        <li>
          <form className="searchForm" onSubmit={this.handleSubmit}>
            <input
              value={this.state.searchTerms}
              className="searchbox"
              name="searchTerms"
              type="text"
              placeholder="Search..."
              onChange={this.handleChange}
            />
            <input className="searchBtn" type="submit" value="Go" />
          </form>
        </li>
        <NavItem href={routes.CART} className="navitem-shopping-cart">
          <Icon>shopping_cart</Icon>
          <Badge className="cart-badge">{this.props.cartSize}</Badge>
        </NavItem>
        <NavItem href={routes.SIGN_IN}>
          Sign In
        </NavItem>
      </Navbar>
    );
  };
};

export default withRouter(Navigation);
