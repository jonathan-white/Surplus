import React, { Component } from 'react';
import CartItem from "../CartItem";
import CartTotal from "../CartTotal";

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeClass: "",
		}
	}

	componentDidMount = () => {
		window.addEventListener('scroll', (event) => {
			const scrollPosY = window.pageYOffset | document.body.scrollTop;
			let classToApply = "";
			if(scrollPosY > 50) {
				classToApply = "checkoutBox_scrolled";
			} else {
				classToApply = ""
			}
			this.setState({
				activeClass: classToApply
			})
		});
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
						<CartTotal classToApply={this.state.activeClass}
							cartSize={this.props.shoppingCart.length} stage={this.props.stage} />
					</div>
				</div>
			</div>
    );
  }
}

export default ShoppingCart;
