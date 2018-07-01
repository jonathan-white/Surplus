import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
// import { NewProduct, UserProfile, UserProductsList } from '../components/Users';
import NewProduct from '../components/NewProduct';
import UserProfile from '../components/UserProfile';
import UserProductsList from '../components/UserProductsList';
import API from "../utils/API";

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: [],
			title: "",
			description: "",
			price: "",
			quantity: "",
			img_local: "",
			img_cloud: "",
			user_image: "",
			user_id: "",
		}
  }

	componentDidMount(){
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
			img_local: this.state.img_local,
			img_cloud: this.state.img_cloud,
			accountId: this.state.user_id,
		}

		API.createProduct(newProduct)
			.then(res => {
				this.setState({
					title: "",
					description: "",
					price: "",
					quantity: "",
					img_local: "",
					img_cloud: "",
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
		event.preventDefault();
		let data = new FormData(event.target);

		API.uploadProductPic(data)
			.then(res => this.setState({
				img_local: res.data.local_url,
				img_cloud: res.data.cloud_url,
			}))
			.catch(err => console.log(err));
	};

	handleProductDelete = (id) => {
		console.log('Deleting product: ',id);
		API.deleteProduct(id)
			.then(res => {
				console.log(`Successfully deleted Product: ${id}`);
				API.getProducts()
					.then(results=> this.setState({ products: results.data }))
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	};

  render() {
    return (
			<Row>
				<Col s={6}>
					<UserProfile
						userId={this.state.user_id}/>
					<NewProduct
						title={this.state.title}
						description={this.state.description}
						price={this.state.price}
						quantity={this.state.quantity}
						image={this.state.img_local}
						handleInputChange={this.handleInputChange}
						handleFormSubmit={this.handleFormSubmit}
						handleUpload={this.handleUpload}
					/>
				</Col>
				<Col s={6}>
					<UserProductsList
						userId={this.state.user_id}
						products={this.state.products}
						handleProductDelete={this.handleProductDelete}
					/>
				</Col>
			</Row>
    );
  }
}


export default Profile;
