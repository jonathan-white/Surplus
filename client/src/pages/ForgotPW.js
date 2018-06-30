import React, { Component } from "react";
import Input from "react-materialize/lib/Input";
import API from '../utils/API';

class ForgotPW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }
  };

  handleFormSubmit = (event) => {
		event.preventDefault();

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

          <div className="login-signup-buttons">
            <button id="signup" className="btn" onClick={this.handleFormSubmit}>Reset My Password</button>
          </div>
        </form>
      </div>
    )
  }
};

export default ForgotPW;
