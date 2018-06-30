import React, { Component } from "react";
import Input from "react-materialize/lib/Input";
import API from '../utils/API';

class Signin extends Component {
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

      API.loginAccount(userData)
      .then(res => {
        console.log(res.data);
        console.log('Welcome',res.data.name);
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
          <div className="login-signup-buttons">
            <button id="login" className="btn" onClick={this.handleFormSubmit}>Signin</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Signin;
