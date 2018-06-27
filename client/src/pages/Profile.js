import React, { Component } from 'react';
import { Row, Col } from 'react-materialize'
import NewProduct from "../components/NewProduct";
import UserProfile from  "../components/UserProfile";
import UserProductsList from "../components/UserProductsList";
import API from "../utils/API"

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: [],
			title: "",
			description: "",
			price: "",
			quantity: "",
			product_image: "",
			user_image: "",
		}
  }

	componentWillMount(){
		this.pageLoadData();
	};
	
	pageLoadData = () => {
		API.getProducts()
			.then(results=> this.setState({ products: results.data }))
			.catch(err => console.log(err));
	};
		
	handleFormSubmit = event => {
		event.preventDefault();

		const newProduct = {
			title: this.state.title,
			description: this.state.description,
			price: this.state.price,
			quantity: this.state.quantity,
			image: this.state.product_image,
		}

		API.createProduct(newProduct)
			.then(res => {
				this.setState({
					title: "",
					description: "",
					price: "",
					quantity: "",
					product_image: "",
					user_image: "",
				})
				console.log(res.data);
				API.getProducts()
					.then(results=> this.setState({ products: results.data }))
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	};
	
	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

	handleUpload = event => {
		// event.preventDefault();
		// let data = new FormData();

		// API.uploadProductPic()
		// 	.then(res => console.log(res.data))
		// 	.catch(err => console.log(err));
		// // event.preventDefault();
	};

  render() {
    return (   
			<Row>
				<Col s={6}>
					<UserProfile/>
					<NewProduct 
						title={this.state.title}
						description={this.state.description}
						price={this.state.price}
						quantity={this.state.quantity}
						image={this.state.product_image}
						handleInputChange={this.handleInputChange} 
						handleFormSubmit={this.handleFormSubmit}
					/>
				</Col>
				<Col s={6}>
					<UserProductsList products={this.state.products}/>
				</Col>
			</Row>
    );
  }
}


export default Profile;
