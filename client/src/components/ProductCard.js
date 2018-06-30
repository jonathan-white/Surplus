import React, { Component } from "react";

class ProductCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating_img: "images/star-ratings.png",
			ownedByUser: true,
			shoppingCart: []
		}
	};

	shoppingCartHandler = (item) =>{
		const newCart = [...this.state.shoppingCart]
		newCart.push(item)
		this.setState({
			shoppingCart: newCart
		})
	}


	render() {
		return (
			<div className="item-container">
				<div className="row img-holder">
					{this.props.product.image_url ? (
						<img className="product-img" src={this.props.product.image_url || "images/placeholder.png"} alt={this.props.product.title} />
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
					<button className="btn green add-to-cart-btn" onClick={() => this.shoppingCartHandler(this.props.product)}>Add to Cart</button>
				</div>
				{this.state.ownedByUser && (
					<div className="close" title="Remove Product" onClick={() => this.props.handleProductDelete(this.props.product._id)}>
						<i className="fas fa-window-close fa-2x"></i>
					</div>
				)}
			</div>
		);
	};
};

export default ProductCard;
