import React, { Component } from 'react';
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
// import PaypalExpressBtn from 'react-paypal-express-checkout';
// import API from '../utils/API';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shoppingCart: [],
			order: {},
		}
	}

	componentDidMount = () => {
		const sessionData = JSON.parse(localStorage.getItem('sessionData'));
		if(sessionData){
			this.setState({shoppingCart: sessionData.shoppingCart});

			const cart = sessionData.shoppingCart;
			let totalPrice = 0;
			for (var i = 0; i < cart.length; i++) {
				totalPrice += cart[i].price * 1;
			}
		}

	}


  render() {

    return (
      <div className="row">
				<h5 className="page-title">Shopping Cart</h5>
				<div className="row">
					<div className="col s8">
						{this.state.shoppingCart.length
							?	this.state.shoppingCart.map((cartItem, index) => <Cart product={cartItem} key={index}/>)
							: <div>No Items in Shopping Cart</div>
						}
					</div>
					<div className="col s4">
						<Checkout cartSize={this.state.shoppingCart.length} />
						{/* <PaypalExpressBtn client={client} currency={'USD'} total={1.00} env={'sandbox'} onError={onError} onSuccess={onSuccess} onCancel={onCancel} /> */}
					</div>
				</div>
			</div>
    );
  }
}

export default ShoppingCart;
