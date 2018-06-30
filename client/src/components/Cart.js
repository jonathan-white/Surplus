import React from "react";
// import { Row, Col } from 'react-materialize'

const Cart = (props) => (
    <div className="cart-item">
			
				<div className="row">

                    <div className="col s4">
						<img className="product-image" src="" alt="Product Img"/> 
					</div>
					<div className="col">
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