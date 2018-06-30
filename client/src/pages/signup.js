import React, { Component } from "react";
import Input from "react-materialize/lib/Input";
import { Link } from "react-router-dom";
import API from '../utils/API';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: "",
      email: "",
      password: "",
    }
  };

  handleFormSubmit = (event) => {
		event.preventDefault();

    if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
      const userData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }

      API.createAccount(userData)
      .then(res => {
        console.log(res.data);

        // Redirect the user to the homepage
        window.location.href = "/";

        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
    }
	};

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

  render() {
    return (
      <div className="login-form">
        <form >
          <Input
            s={12}
            type="text"
            label="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
          />
          <Input
            s={12}
            type="password"
            label="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
          <Input
            s={12}
            type="text"
            label="Company (required)"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />
          <div className="login-signup-buttons">
            <button id="signup" className="btn" onClick={this.handleFormSubmit}>Signup</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Signup;
