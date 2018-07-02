import React, { Component } from "react";
import API from "../utils/API";

class MarketplaceProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating_img: "images/star-ratings.png",
			ownerId: '',
		}
	};

	addToCard = (product) => {
		// Add to the session's cart
		let cartData = [];
		const sessionData = JSON.parse(localStorage.getItem('sessionData'));

		if(sessionData) {
			cartData = [...sessionData.shoppingCart, product];
		} else {
			cartData.push(product);
		}

		console.log('cartData:',cartData);

		// this.props.updateCartSize(cartData.length);

		// Update the cart in localstorage
		API.getSessionID()
		.then(res => {
			localStorage.setItem('sessionData',JSON.stringify({
				sessionId: res.data,
				shoppingCart: cartData,
			}));
		})
		.catch(err => console.log(err));

	};

	render() {
		return (
			<div className="item-container">
				<div className="row img-holder">
					{this.props.product.img_cloud ? (
						<img className="product-img" src={this.props.product.img_cloud || "images/placeholder.png"} alt={this.props.product.title} />
					) : (
						<i class="fas fa-spinner fa-spin fa-3x"></i>
					)}
				</div>
				<div className="row">
					<div>
						<span className="product-title">{this.props.product.title}</span>
					</div>
				</div>
				<div className="row">
					<div className="product-description">
						<span>{this.props.product.description}</span>
					</div>
				</div>
				<div className="row">
					<div className="price-qty-row">
						<div className="price">${this.props.product.price}</div>
						<div className="unit-qty">
							<div className="unit">/unit</div>
							<div>Stock: <span className="quantity">{this.props.product.quantity}</span></div>
						</div>
					</div>
					<div className="rating">Rating</div>
					<button className="btn green add-to-cart-btn" onClick={() => this.addToCard(this.props.product)}>Add to Cart</button>
				</div>
			</div>
		);
	};
};

export default MarketplaceProduct;
