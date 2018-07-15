import React, { Component } from "react";
import { Pagination } from 'react-materialize';

class MarketplaceProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 4,
			isSelected: false,
		}
	};

	render() {
		const { isSelected, rating } = this.state;
		const { _id, title, description, quantity, img_cloud, ratings } = this.props.product;
		const price = this.props.product.price.toFixed(2);

		const checkIfSoldOut = () => {
			if(quantity < 1) {
				return 'sold-out';
			}
			return '';
		}

		const priceReduction = Math.floor(Math.random() * ((price * .8) - (price * .1) + (price * .1)));

		return (
				<div id={_id} className={`item-container ${quantity < 1 && 'sold-out'}`}>
					<a href={`products/${_id}`}>
						<div className="row img-holder">
							<img className="product-img" src={img_cloud ||
							"https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png"}
								alt={title} />
						</div>
						<div className="product-title">{title}</div>
						<div className="product-price">
							<span className="current-price">Sale ${price}</span>
							{"  "}
							<span className={`old-price reduction-${priceReduction}`}>${(parseFloat(price) + priceReduction).toFixed(2)}</span>
						</div>
						<div className={`rating stars-${rating}`}></div>
					</a>
					<button
						disabled={isSelected || (quantity < 1)}
						className={`btn green add-to-cart-btn`}
						onClick={() => {
							this.setState({isSelected: true});
							this.props.handleAddToCart(this.props.product);
						}}
					>
						Add to Cart
					</button>
				</div>
		);
	};
};

const MarketplaceProductList = ({
	products,
	onAddToCart
}) => (
  <div>
    <div className="row productslist">
			{!products
				? <i className="fas fa-spinner fa-spin fa-5x"></i>
				: products.length
					? products.map(product =>
						<MarketplaceProduct
							handleAddToCart={onAddToCart}
							product={product} key={product._id} />)
					: `We are currently adding more products. Check back later!`
			}
    </div>
		<Pagination items={5} activePage={1} maxButtons={5} />
  </div>
);

export default MarketplaceProduct;

export {
	MarketplaceProductList,
}
