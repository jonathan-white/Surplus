import React, { Component } from "react";
import { Link, withRouter } from  'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

import Input from "react-materialize/lib/Input";
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

    const {
      name,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log('Logged in user: ', authUser.user);
        // const userData = {
        //   name: name,
        //   email: email,
        // };

        API.createAccount({
          userId: authUser.user.uid,
          name: name,
          email: email,
        })
        .then(res => {
          console.log('After createAccount:',res.data);
          this.setState(() => ({ ...INITIAL_STATE }));
          // Redirect the user to the homepage
          history.push(routes.ACCOUNT);
        })
        .catch(error => this.setState({ error: error }));
      })
      .catch(error => this.setState({ error: error }));

    event.preventDefault();
	};

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

  render() {
    const {
      name,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid = (
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      name === ''
    );

    return (
      <div className="login-form">
        <form onSubmit={this.handleFormSubmit} method="post">
          <Input
            s={12}
            type="text"
            label="Company Name (required)"
            value={name}
            name="name"
            onChange={this.handleInputChange}
          />
          <Input
            s={12}
            type="text"
            label="Email"
            value={email}
            name="email"
            onChange={this.handleInputChange}
          />
          <Input
            s={12}
            type="password"
            label="Password"
            value={passwordOne}
            name="passwordOne"
            onChange={this.handleInputChange}
          />
          <Input
            s={12}
            type="password"
            label="Confirm Password"
            value={passwordTwo}
            name="passwordTwo"
            onChange={this.handleInputChange}
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
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
