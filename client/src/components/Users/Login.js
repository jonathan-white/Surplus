import React, { Component } from "react";
import Input from "react-materialize/lib/Input";
import API from '../../utils/API';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
    }
  };

  handleFormSubmit = (event) => {
		event.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    }

    if(event.target.id === "login"){
      // API.loginAccount(userData)
  		// 	.then(res => console.log(res.data))
  		// 	.catch(err => console.log(err));
    } else {
      API.createAccount(userData)
  			.then(res => console.log(res.data))
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
            label="Username"
            value={this.state.username}
            name="username"
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
          <div className="login-signup-buttons">
            <button id="login" className="btn" onClick={this.handleFormSubmit}>Login</button>
            <button id="signup" className="btn btn-flat" onClick={this.handleFormSubmit}>Signup</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Login;