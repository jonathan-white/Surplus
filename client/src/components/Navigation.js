import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize';
import * as routes from '../constants/routes';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  };
  render() {
    return (
        <Navbar brand='Surplus Market' right>
          <NavItem href="#">
            <form>
              <input type="text" placeholder="search for products"/>
            </form>
          </NavItem>
          <NavItem href='/profile'>
            <Icon>person</Icon>
          </NavItem>
          <NavItem href='/checkout'>
            <Icon>shopping_cart</Icon>
          </NavItem>
          <NavItem href='/signin'>
            Login
        </NavItem>
        </Navbar>

      );
  };
};


export default Navigation;
