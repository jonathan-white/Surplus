import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// import { createStore, combineReducers } from 'redux';
//
// const products = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_TO_CART':
//       return {
//         id: action.id,
//         productId: action.productId,
//         isSelected: false
//       }
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
