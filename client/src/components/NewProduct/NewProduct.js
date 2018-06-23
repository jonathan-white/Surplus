import React from "react";
import { Card, CardTitle } from 'react-materialize'
import "./NewProduct.css";

const NewProduct = props => (
	<Card header={<CardTitle reveal image={"images/officeChairO.jpg"} waves='light' />}
		// this is accessing through props the market.js state for cards
		// title= {props.nonsense.title}
		title="Card Title"
		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
		<p><a href={`/products/${props.id}`}>This is a link</a></p>
	</Card>
)

export default NewProduct;