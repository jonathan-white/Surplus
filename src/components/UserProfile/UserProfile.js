import React, { Component } from "react";
import { Card, CardTitle } from 'react-materialize'
import "./UserProfile.css";
import Input from "react-materialize/lib/Input";

class UserProfile extends Component {
	constructor(props){
		super(props);
		this.state = {
			company: "",
			// user: {
			// 	name: ""
			// },
			// product: {
			// 	title: 
			// }
		}
	}

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (

			<div className="profile">
				<div>
					<img className="profile-img" src="images/chase.jpg" />
				</div>
				<form className="row">
					<Input 
						s={12} 
						placeholder="Company" 
						label="Company" 
						value={this.state.company}
						name="company"
						onChange={this.handleInputChange}
					/>
					<Input s={12} type="email" label="Email" />
					<Input s={12} type="tel" label="Phone" />
				</form>
			</div>
		)
	}
} 

export default UserProfile;