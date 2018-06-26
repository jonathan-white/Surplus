
export default NewProduct;import React, { Component } from "react";
// import { Card, CardTitle } from 'react-materialize'
import "./NewProduct.css";
import Input from "react-materialize/lib/Input";
import API from "../../utils/API";

class NewProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: "",
			description: "",
			price: "",
			quantity: ""

		}
	};

	handleFormSubmit = event => {
		event.preventDefault();

		const newProduct = {
			title: this.state.title,
			description: this.state.description,
			price: this.state.price,
			quantity: this.state.quantity

		}

		API.createProduct(newProduct)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		return (

			<div className="profile">
				<div className="profile-img">
					<img src="images/chase.jpg" alt="company logo" />
					<a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
				</div>
				<form className="row">
					<Input 
						s={12} 
						type="text"
						label="Title (required)" 
						value={this.state.title}
						name="title"
						onChange={this.handleInputChange}
					/>
					<Input 
						s={12} 
						type="textarea" 
						label="description" 
						value={this.state.description}
						name="description"
						onChange={this.handleInputChange}
					/>
					<Input 
						s={12} 
						type="text" 
						label="price" 
						value={this.state.price}
						name="price"
						onChange={this.handleInputChange}
					/>

					<Input 
						s={12} 
						type="number" 
						label="quantity" 
						value={this.state.quantity}
						name="quantity"
						onChange={this.handleInputChange}
					/>
					<Input 
						s={12} 
						type="tel" 
						label="Phone" 
						value={this.state.phone}
						name="phone"
						onChange={this.handleInputChange}
					/>
					<button 
						className="btn center-align" 
						onClick={this.handleFormSubmit}
					>
					Submit
					</button>
				</form>
			</div>
		)
	}
} 

export default NewProduct;