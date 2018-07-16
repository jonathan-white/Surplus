import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

// Reducer
const product = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        product: action.product,
        qty: action.qty,
        cost: action.product.price * action.qty
      };
      case 'UPDATE_QUANTITY':
        console.log('action:', action);
        if(state.product._id !== action.product._id) {
          return state;
        }
        return {
          ...state,
          qty: action.qty,
          cost: action.product.price * action.qty
        };
    default:
      return state;
  }
};

// Reducer composition
const cart = (state = JSON.parse(localStorage.getItem('cart')) || [], action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        product(undefined, action)
      ];
    case 'UPDATE_QUANTITY':
      return state.map(t => product(t, action));
    default:
      return state;
  }
};

// Context Provider
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: PropTypes.object
};

ReactDOM.render(
  <Provider store={createStore(cart)}>
    <App />
  </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
