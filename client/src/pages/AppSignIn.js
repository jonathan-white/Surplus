import React, { Component } from "react";
import { withRouter } from  'react-router-dom';

import { SignUpLink } from './AppSignUp';
import { PasswordForgetLink } from  './ForgotPW';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

import Input from "react-materialize/lib/Input";
// import API from '../utils/API';

const SignInPage = ({ history }) => (
  <div>
    <SignInForm history={history} />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  };

  handleFormSubmit = (event) => {
    const { email, password } = this.state;
    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then((resp) => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.ACCOUNT);
      })
      .catch(error => this.setState({error: error}));

      event.preventDefault();
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div className="login-form">
        <form onSubmit={this.handleFormSubmit}>
          <Input s={12} type="text" onChange={this.handleInputChange}
            label="Email" value={email} name="email"
          />
          <Input s={12} type="password" onChange={this.handleInputChange}
            label="Password" value={password} name="password"
          />
          <button disabled={isInvalid} className="btn" type="submit">Sign In</button>
          {error && <p>{error.message}</p>}
          <PasswordForgetLink />
          <SignUpLink />
        </form>
      </div>
    )
  }
};

export default withRouter(SignInPage);

export {
  SignInForm,
};
