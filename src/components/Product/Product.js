import React from "react";
import { Card, CardTitle, Col } from 'react-materialize'
//import "./Product.css";

const Product = props => (
	<div>
		<Col s={12} m={3}>
			<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light' />}
				// this is accessing through props the market.js state for cards
				// title= {props.nonsense.title}
				title="Card Title"
				reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
				<p><a href="/">This is a link</a></p>
			</Card>
		</Col>
	</div>
)

export default Product;