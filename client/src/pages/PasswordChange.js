import React, { Component } from 'react';
import { Input } from "react-materialize/lib";
import { auth } from '../firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleFormSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => this.setState({ ...INITIAL_STATE }))
      .catch(error => this.setState({ error }));

    event.preventDefault();
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({	[name]: value });
	};

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <div>
        <h5 className="center-align">Change Password</h5>
        <div className="login-form">
          <form onSubmit={this.handleFormSubmit}>
            <Input s={12} type="password" onChange={this.handleInputChange}
              label="New Password" value={passwordOne} name="passwordOne"
            />
            <Input s={12} type="password" onChange={this.handleInputChange}
              label="Confirm New Password" value={passwordTwo} name="passwordTwo"
            />
            <button disabled={isInvalid} className="btn">Reset My Password</button>
            { error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default PasswordChangeForm;
