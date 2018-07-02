import React, { Component } from 'react';
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
// import PaypalExpressBtn from 'react-paypal-express-checkout';
// import API from '../utils/API';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shoppingCart: []
		}
	}

	componentDidMount = () => {
		const sessionData = JSON.parse(localStorage.getItem('sessionData'));
		if(sessionData){
			this.setState({shoppingCart: sessionData.shoppingCart});
		}
	}


  render() {

    return (
      <div className="row">
				<div className="col s8">
					<h5>Shopping Cart</h5>
					{this.state.shoppingCart.length
						?	this.state.shoppingCart.map((cartItem, index) => <Cart product={cartItem} key={index}/>)
						: <div>No Items in Shopping Cart</div>
					}
				</div>
				<div className="col s4">
					<Checkout />
					{/* <PaypalExpressBtn client={client} currency={'USD'} total={1.00} env={'sandbox'} onError={onError} onSuccess={onSuccess} onCancel={onCancel} /> */}
				</div>
			</div>
    );
  }
}

export default ShoppingCart;
