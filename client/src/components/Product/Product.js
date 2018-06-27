import React from "react";
import { Card, CardTitle, Col } from 'react-materialize'
import "./Product.css";

const Product = props => (
	<div>
		<Col s={12} m={3}>
			<Card className="" header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
				// this is accessing through props the market.js state for cards
				title={props.product.title || 'Product Title'}
				reveal={<p>{props.product.description || 'Description of Product'}</p>}
			>
				<p><a href="/">Add to Cart</a></p>
			</Card>
		</Col>
	</div>
)

export default Product;