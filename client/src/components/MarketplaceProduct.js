import React, { Component } from "react";
import { Pagination } from 'react-materialize';

// Presentational Component
const MarketplaceProduct = ({
	product,
	onAddToCart,
	discount=Math.floor(Math.random() * ((product.price * .8) - (product.price * .1) + (product.price * .1)))
}) => (
	<div id={product._id} className={`item-container ${product.quantity < 1 && 'sold-out'}`}>
		<a href={`products/${product._id}`}>
			<div className="row img-holder">
				<img className="product-img" src={product.img_cloud ||
				"https://storage.googleapis.com/surplus-6507a.appspot.com/assets/placeholder.png"}
					alt={product.title} />
			</div>
			<div className="product-title">{product.title}</div>
			<div className="product-price">
				<span className="current-price">Sale ${product.price.toFixed(2)}</span>
				{"  "}
				<span className={`old-price reduction-${discount}`}>
					${(parseFloat(product.price) + discount).toFixed(2)}
				</span>
			</div>
			<div className={`rating stars-4`}></div>
		</a>
		<button
			disabled={product.quantity < 1}
			className={`btn green add-to-cart-btn`}
			onClick={onAddToCart}
		>
			Add to Cart
		</button>
	</div>
);

// Presentational Component
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
							onAddToCart={onAddToCart}
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
