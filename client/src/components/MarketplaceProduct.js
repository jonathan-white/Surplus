import React, { Component } from "react";
import API from "../utils/API";

class MarketplaceProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: '4-5',
			isSelected: false,
		}
	};

	handleClick = (product) => {
		// Add to the session's cart
		this.setState({isSelected: true});

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
		const { isSelected, rating } = this.state;

		return (
			<div className="item-container">
				<div className="row img-holder">
					<img className="product-img" src={this.props.product.img_cloud ||
					"https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png"}
						alt={this.props.product.title} />
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
							{/* <div>Stock: <span className="quantity">{this.props.product.quantity}</span></div> */}
						</div>
					</div>
					<div className={`rating stars-${rating}`}></div>
					<button
						disabled={isSelected}
						className={`btn green add-to-cart-btn`}
						onClick={() => this.handleClick(this.props.product)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		);
	};
};

const MarketplaceProductList = props => (
  <div>
    <div className="row productslist">
			{!props.products
				? <i className="fas fa-spinner fa-spin fa-3x"></i>
				: props.products.length
					? props.products.map(product =>
						<MarketplaceProduct product={product} key={product._id} />)
					: `We are currently adding more products. Check back later!`
			}
    </div>
  </div>
);

export default MarketplaceProduct;

export {
	MarketplaceProductList,
}
