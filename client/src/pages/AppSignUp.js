import React, { Component } from "react";
import { Link, withRouter } from  'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

import { Input } from "react-materialize";
import API from '../utils/API';

const SignUpPage = ({history}) => (
  <div>
    <SignUpForm history={history} />
  </div>
)

const INITIAL_STATE = {
  name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  };

  handleFormSubmit = (event) => {

    const { name, email, passwordOne } = this.state;
    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        API.createAccount({ userId: authUser.user.uid, name: name, email: email })
          .then(res => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.ACCOUNT);
          })
          .catch(error => this.setState({ error: error }));
      })
      .catch(error => this.setState({ error: error }));

    event.preventDefault();
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

  render() {
    const { name, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid = (
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      name === ''
    );

    return (
      <div className="login-form">
        <form onSubmit={this.handleFormSubmit} method="post">
          <Input s={12} type="text" onChange={this.handleInputChange}
            label="Company Name (required)" value={name} name="name"
          />
          <Input s={12} type="text" onChange={this.handleInputChange}
            label="Email" value={email} name="email"
          />
          <Input s={12} type="password" onChange={this.handleInputChange}
            label="Password" value={passwordOne} name="passwordOne"
          />
          <Input s={12} type="password" onChange={this.handleInputChange}
            label="Confirm Password" value={passwordTwo} name="passwordTwo"
          />
          <div className="g-recaptcha" data-sitekey="6Lc-omEUAAAAAHb0j9_cStOCYvYktrenZci4zghk"></div>
          <button disabled={isInvalid} className="btn" type="submit">Sign Up</button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    )
  }
};

const SignUpLink = () => (
  <div>
    <p>
      Don't have an account?
      {' '}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  </div>
);

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
