import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize'

const Navigation = props => (
    <Navbar brand='Surplus Market' right>
      <NavItem href='/search'>
        <Icon>search</Icon>
      </NavItem>
      {props.isLoggedIn && (
        <NavItem href='/profile'>
          <Icon>person</Icon>
        </NavItem>
      )}
      <NavItem href='/checkout'>
        <Icon>shopping_cart</Icon>
      </NavItem>
      {props.isLoggedIn ? (
        <NavItem href='/signout'>
          Sign out
        </NavItem>
      ) : (
        <NavItem href='/signin'>
          Sign in
        </NavItem>
      )}
    </Navbar>
);

export default Navigation;
