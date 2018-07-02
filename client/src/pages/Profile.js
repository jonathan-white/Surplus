import React, { Component } from 'react';
import AuthUserContext from '../components/AuthUserContext';
import PasswordChangeForm from './PasswordChange';

import NewProduct from '../components/NewProduct';
import UserProductsList from '../components/UserProductsList';
import API from "../utils/API";

import withAuthorization from '../components/withAuthorization';

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{authUser =>
			<div>
				<Profile authUser={authUser} />
			</div>
		}
	</AuthUserContext.Consumer>
)

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: this.props.authUser,
			products: [],
			title: "",
			description: "",
			price: "",
			quantity: "",
			img_local: "",
			img_cloud: "",
			user_image: "",
			user_id: this.props.authUser.uid,
		}
  }

	componentDidMount(){
		this.pageLoadData();
	};

	pageLoadData = () => {
		API.getAccount(this.state.user_id)
			.then(res => console.log('found account:',res.data))
			.catch(err => console.log(err));

		API.getProductsForUser(this.state.user_id)
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
			userId: this.state.user_id,
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
				API.getProductsForUser(this.state.user_id)
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

	handlePicUpload = event => {
		const data = new FormData(event.target);

		API.uploadPic(data)
			.then(res => this.setState({
				img_local: res.data.local_url,
				img_cloud: res.data.cloud_url,
			}))
			.catch(err => console.log(err));
		event.preventDefault();
	};

	handleProductDelete = (id) => {
		console.log('Deleting product: ',id);
		// delete product from DB and remove product image from google cloud
		API.deleteProduct(id)
			.then(res => {
				console.log(`Successfully deleted Product: ${id}`);
				API.getProductsForUser(this.state.user_id)
					.then(results=> this.setState({ products: results.data }))
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	};

  render() {
    return (
			<div className="row">
				<div className="col s6">
					<div className="row">
						<h4>Account: {this.props.authUser.email}</h4>
					</div>
					<NewProduct
						title={this.state.title}
						description={this.state.description}
						price={this.state.price}
						quantity={this.state.quantity}
						image={this.state.img_local}
						handleInputChange={this.handleInputChange}
						handleFormSubmit={this.handleFormSubmit}
						handlePicUpload={this.handlePicUpload}
					/>
					<PasswordChangeForm />
				</div>
				<div className="col s6">
					<UserProductsList
						userId={this.state.user_id}
						products={this.state.products}
						handleProductDelete={this.handleProductDelete}
					/>
				</div>
			</div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
