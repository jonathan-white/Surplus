import React, { Component } from 'react';
import CartItem from "../CartItem";
import Checkout from "../Checkout";

// import PaypalExpressBtn from 'react-paypal-express-checkout';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			order: {},
		}
	}

  render() {

    return (
      <div className="row">
				<h5 className="page-title">Shopping Cart</h5>
				<div className="row">
					<div className="col s8">
						{this.props.shoppingCart.length
							?	this.props.shoppingCart.map((cartItem, index) =>
								<CartItem
									product={cartItem}
									key={index}
									index={index}
									handleRemoveFromCart={this.props.handleRemoveFromCart}
								/>)
							: <div>No Items in Shopping Cart</div>
						}
					</div>
					<div className="col s4">
						<Checkout cartSize={this.props.shoppingCart.length} />
					</div>
				</div>
			</div>
    );
  }
}

export default ShoppingCart;
