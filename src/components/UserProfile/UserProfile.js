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
				<div className="profile-img">
					<img src="images/chase.jpg" />
					{/* <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a> */}
				</div>
				<form className="row">
					<Input 
						s={12} 
						type="text"
						label="Company" 
						value={this.state.company}
						name="company"
						onChange={this.handleInputChange}
					/>
					<Input 
						s={12} 
						type="email" 
						label="Email" 
						value={this.state.email}
						onChange={this.handleInputChange}
					/>
					<Input 
						s={12} 
						type="tel" 
						label="Phone" 
						value={this.state.phone}
						onChange={this.handleInputChange}
					/>
					<button className="btn">Submit</button>
				</form>
			</div>
		)
	}
} 

export default UserProfile;