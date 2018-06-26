import React, { Component } from "react";
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
				<form id="frmUploader" method="post" encType="multipart/form-data" action="api/uploads/">
					<input type="file" name="fileUpload" />
					<input type="submit" value="Submit" />
				</form>
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
						label="Description" 
						value={this.state.description}
						name="description"
						onChange={this.handleInputChange}
					/>
					<Input 
						s={12} 
						type="text" 
						label="Price" 
						value={this.state.price}
						name="price"
						onChange={this.handleInputChange}
					/>
					<Input 
						s={12} 
						type="number" 
						label="Quantity" 
						value={this.state.quantity}
						name="quantity"
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