import React, { Component } from "react";
// import { Card, CardTitle } from 'react-materialize'
import "./UserProfile.css";
import Input from "react-materialize/lib/Input";
import API from "../../utils/API";

class UserProfile extends Component {
	constructor(props){
		super(props);
		this.state = {
			company: "",
			email: "",
			phone: "",
		}
	};

	handleFormSubmit = event => {
		event.preventDefault();

		const newCompany = {
			name: this.state.company,
			email: this.state.email,
			phone: this.state.phone
		}

		API.createAccount(newCompany)
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
			<div>
				<div className="row">
					<h4>Your Profile</h4>
				</div>
				<div className="row">
					<div className="profile">
						<div className="profile-img">
							<img src="images/placeholder.png" alt="company logo" />
							<a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
						</div>
						<form className="row">
							<Input
								s={12}
								type="text"
								label="Company (required)"
								value={this.state.company}
								name="company"
								onChange={this.handleInputChange}
							/>
							<Input
								s={12}
								type="email"
								label="Email (required)"
								value={this.state.email}
								name="email"
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
				</div>
			</div>
		)
	}
}

export default UserProfile;
