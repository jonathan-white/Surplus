import React from "react";
// import { Row, Col } from 'react-materialize'

const Cart = (props) => (
    <div className="item-container">
				{/* <div className="row img-holder">
					{props.product.image_url ? (
						<img className="product-img"  />
					) : (
						<i class="fas fa-spinner fa-spin fa-3x"></i>
					)}
				</div> */}
				<div className="row 12">
					<div>
						<span className="product-title">title</span>
					</div>
				</div>
				<div className="row">
					<div className="product-description">
						<span>Description</span>
					</div>
				</div>
				<div className="row">
					<div className="price-qty-row">
						<div className="price">Price</div>
						<div className="unit-qty">
							<div className="unit">/unit</div>
							<div>Stock: <span className="quantity">quantity</span></div>
						</div>
					</div>
                </div>
        </div>

    

  
);


export default Cart;