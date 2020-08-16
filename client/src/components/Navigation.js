import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from  'react-router-dom';
import 'materialize-css'
import { Navbar, NavItem, Icon, Badge } from 'react-materialize';

import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import { auth } from '../firebase';
import './Navigation.css'

const Navigation = ({ history }) => (
  <AuthUserContext.Consumer>
    { authUser => authUser
      ? <NavigationAuth history={history} authUser={authUser} />
      : <NavigationNonAuth history={history} />
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
    this.handleSearch = this.handleSearch.bind(this);
  };

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = (event) => {
    event.preventDefault();

    this.props.history.push({
      pathname: routes.SEARCH,
      search: `?q=${this.state.searchTerms}`
    });
  };

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <Navbar 
        alignLinks="right" 
        brand={<a className="brand-logo" href="#">Surplus Market<Icon>store</Icon></a>}
        className="indigo darker-4"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
        search
      >
        <NavItem href={routes.ACCOUNT}>
          <Icon>person</Icon>
        </NavItem>
        <NavItem href={routes.CART} className="navitem-shopping-cart">
          <Icon>shopping_cart</Icon>
          <Badge className="cart-badge">{state.length}</Badge>
        </NavItem>
        <NavItem onClick={auth.doSignOut}>
          Sign Out
        </NavItem>
      </Navbar>
    );
  };
};
NavigationAuth.contextTypes = {
  store: PropTypes.object
};

class NavigationNonAuth extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerms: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = (event) => {
    event.preventDefault();

    this.props.history.push({
      pathname: routes.SEARCH,
      search: `?q=${this.state.searchTerms}`
    });
  };

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <Navbar 
        alignLinks="right" 
        brand={<a className="brand-logo" href="/">Surplus Market<Icon>store</Icon></a>}
        className="indigo darker-4"
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <li>
          <form className="searchForm" onSubmit={this.handleSearch}>
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
          <Badge className="cart-badge">{state.length}</Badge>
        </NavItem>
        <NavItem href={routes.SIGN_IN}>
          Sign In
        </NavItem>
      </Navbar>
    );
  };
};
NavigationNonAuth.contextTypes = {
  store: PropTypes.object
};

export default withRouter(Navigation);
