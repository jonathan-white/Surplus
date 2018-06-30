import React, { Component } from "react";
import { Link, withRouter } from  'react-router-dom';

import { SignUpLink } from './AppSignUp';
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
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({error: error});
      });

      event.preventDefault();

    // if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
    //   const userData = {
    //     name: this.state.name,
    //     email: this.state.email,
    //     password: this.state.password,
    //   }
    //
    //   API.loginAccount(userData)
    //   .then(res => {
    //     console.log(res.data);
    //     console.log('Welcome',res.data.name);
    //     this.setState({ isLoggedIn: true });
    //   })
    //   .catch(err => console.log(err));
    // }
	};

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid = (
      password === '' ||
      email === ''
    );

    return (
      <div className="login-form">
        <form onSubmit={this.handleFormSubmit}>
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
            value={password}
            name="password"
            onChange={this.handleInputChange}
          />
          <button disabled={isInvalid} className="btn" type="submit">Sign In</button>
          {error && <p>{error.message}</p>}
          <div><Link to="/pw-forget">Forgot Password?</Link></div>
          <div><SignUpLink /></div>
        </form>
      </div>
    )
  }
};

export default withRouter(SignInPage);

export {
  SignInForm,
};
