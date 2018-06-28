import React from "react";
import { Card, CardTitle } from 'react-materialize'
import "./Product.css";

const Product = props => (
	<Card className="product" header={<CardTitle reveal image={"Images/bPrinter.jpg"} waves='light' />}
		// this is accessing through props the market.js state for cards
		title={props.product.title || 'Product Title'}
		reveal={<p>{props.product.description || 'Description of Product'}</p>}
	>
		<p><a href="/">Add to Cart</a></p>
	</Card>
)

export default Product;
