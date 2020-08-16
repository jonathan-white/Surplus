import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
// import API from "./utils/API";

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
    case 'REMOVE_FROM_CART':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

// const loadProducts = () => {
//   API.getProducts()
//     .then(results=> results.data)
//     .catch(err => []);
// };

// const testRemoveFromCart = () => {
//   const stateBefore = [
//     {
//       product: {
//         _id: 0
//       },
//       qty: 1,
//       cost: 30
//     },
//     {
//       product: {
//         _id: 1
//       },
//       qty: 2,
//       cost: 50
//     }
//   ];
//   const action = {
//     type: 'REMOVE_FROM_CART',
//     index: 0
//   };
//   const stateAfter = [
//     {
//       product: {
//         _id: 1
//       },
//       qty: 2,
//       cost: 50
//     }
//   ];

//   deepFreeze(stateBefore);

//   expect(
//     cart(stateBefore, action)
//   ).toEqual(stateAfter);
// };
// testRemoveFromCart();
// console.log('All tests passed.');

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

// const surplusApp = combineReducers({
//   cart,
//   loadProducts
// });

ReactDOM.render(
  <Provider store={createStore(cart)}>
    <App />
  </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
