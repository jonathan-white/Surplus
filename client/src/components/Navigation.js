import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import { Navbar, NavItem, Icon, Badge } from 'react-materialize';

import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import { auth } from '../firebase';
import withShoppingCart from '../components/withShoppingCart';

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

    // this.context.history.push('/search') OR this.props.history.push('/search')
    // pass this.state.searchTerms to the route
    // the search route has a component that makes the db request and loops through
    // the results and creates a SearchResult component for each.
  };

  render() {
    return (
      <Navbar brand='Surplus Market' right style={{height: '75px'}}>
        <NavItem href="#">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.searchTerms}
              className="searchbox"
              name="searchTerms"
              type="text"
              placeholder="Search..."
              onChange={this.handleChange}
            />
          </form>
        </NavItem>
        <NavItem href={routes.ACCOUNT}>
          <Icon>person</Icon>
        </NavItem>
        <NavItem href={routes.CHECKOUT} className="navitem-shopping-cart">
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

    // this.context.history.push('/search') OR this.props.history.push('/search')
    // pass this.state.searchTerms to the route
    // the search route has a component that makes the db request and loops through
    // the results and creates a SearchResult component for each.
  };

  render() {
    return (
      <Navbar brand='Surplus Market' right style={{height: '75px'}}>
        <NavItem href='#'>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.searchTerms}
              className="searchbox"
              name="searchTerms"
              type="text"
              placeholder="Search..."
              onChange={this.handleChange}
            />
          </form>
        </NavItem>
        <NavItem href={routes.CHECKOUT} className="navitem-shopping-cart">
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

export default withRouter(withShoppingCart(Navigation));
