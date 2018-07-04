import React, { Component } from "react";
import API from "../utils/API";

class MarketplaceProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 4,
			isSelected: false,
		}
	};

	// handleClick = (product) => {
	// 	// Add to the session's cart
	// 	this.setState({isSelected: true});
	//
	// 	let cartData = [];
	// 	const sessionData = JSON.parse(localStorage.getItem('sessionData'));
	//
	// 	if(sessionData) {
	// 		cartData = [...sessionData.shoppingCart, product];
	// 	} else {
	// 		cartData.push(product);
	// 	}
	//
	// 	console.log('cartData:',cartData);
	//
	// 	// this.props.updateCartSize(cartData.length);
	//
	// 	// Update the cart in localstorage
	// 	API.getSessionID()
	// 	.then(res => {
	// 		localStorage.setItem('sessionData',JSON.stringify({
	// 			sessionId: res.data,
	// 			shoppingCart: cartData,
	// 		}));
	// 	})
	// 	.catch(err => console.log(err));
	//
	// };

	render() {
		const { isSelected } = this.state;
		const { title, description, price, quantity, img_cloud, rating } = this.props.product;

		return (
			<div className={`item-container ${quantity}`}>
				<div className="row img-holder">
					<img className="product-img" src={img_cloud ||
					"https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png"}
						alt={title} />
				</div>
				<div className="row">
					<div>
						<span className="product-title">{title}</span>
					</div>
				</div>
				<div className="row">
					<div className="product-description">
						<span>{description}</span>
					</div>
				</div>
				<div className="row">
					<div className="price-qty-row">
						<div className="price">${price}</div>
						<div className="unit-qty">
							<div className="unit">/unit</div>
						</div>
					</div>
					<div className={`rating stars-${rating}`}></div>
					<button
						disabled={isSelected}
						className={`btn green add-to-cart-btn`}
						onClick={() => {
							this.setState({isSelected: true});
							this.props.handleAddToCart(this.props.product);
						}}
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
				? <i className="fas fa-spinner fa-spin fa-5x"></i>
				: props.products.length
					? props.products.map(product =>
						<MarketplaceProduct
							handleAddToCart={props.handleAddToCart}
							product={product} key={product._id} />)
					: `We are currently adding more products. Check back later!`
			}
    </div>
  </div>
);

export default MarketplaceProduct;

export {
	MarketplaceProductList,
}
