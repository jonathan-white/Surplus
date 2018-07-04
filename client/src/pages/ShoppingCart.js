import React, { Component } from 'react';
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

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
								<Cart
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
						{/* <PaypalExpressBtn client={client} currency={'USD'} total={1.00} env={'sandbox'} onError={onError} onSuccess={onSuccess} onCancel={onCancel} /> */}
					</div>
				</div>
			</div>
    );
  }
}

export default ShoppingCart;
