import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from 'react-materialize';

import * as routes from '../constants/routes';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.context.history.push('/search') OR this.props.history.push('/search')
    // pass this.state.searchTerms to the route
    // the search route has a component that makes the db request and loops through
    // the results and creates a SearchResult component for each.
  }

  render() {
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
        <NavItem href={routes.SIGN_IN}>
          Login
        </NavItem>
      </Navbar>
    );
  };
};

export default Navigation;
