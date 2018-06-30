import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

import SignOutButton from './Signout';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) => (
  <div>
    { authUser
      ? <NavigationAuth authUser={authUser} />
      : <NavigationNonAuth />
    }
  </div>
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

  };

  handleSubmit = (event) => {

  };

  render() {
    console.log(this.props.authUser);
    return (
      <Navbar brand='Surplus Market' right style={{height: '75px'}}>
        <NavItem href="#">
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.searchTerms} type="text" placeholder="search for products"/>
          </form>
        </NavItem>
        <NavItem href={routes.ACCOUNT}>
          <Icon>person</Icon>
        </NavItem>
        <NavItem href={routes.CHECKOUT}>
          <Icon>shopping_cart</Icon>
        </NavItem>
        <NavItem href="#">
          <SignOutButton />
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

  };

  handleSubmit = (event) => {

  };

  render() {
    return (
      <Navbar brand='Surplus Market' right style={{height: '75px'}}>
        <NavItem href='#'>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.searchTerms} type="text" placeholder="search for products"/>
          </form>
        </NavItem>
        <NavItem href={routes.CHECKOUT}>
          <Icon>shopping_cart</Icon>
        </NavItem>
        <NavItem href={routes.SIGN_IN}>
          Sign In
        </NavItem>
      </Navbar>
    );
  };
};

export default Navigation;
