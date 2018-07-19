import React, { Component } from "react";
import { Link, withRouter } from  'react-router-dom';
import { Input } from "react-materialize";
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import API from "../../utils/API";
import Recaptcha from 'react-recaptcha';

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
  isVerified: false,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  };

  handleFormSubmit = (event) => {

    if(this.state.isVerified) {
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
    }

    event.preventDefault();
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

  render() {
    const { name, email, passwordOne, passwordTwo, error, isVerified } = this.state;

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
          <Recaptcha 
            sitekey="6Lc-omEUAAAAAHb0j9_cStOCYvYktrenZci4zghk"
            render="explicit"
            verifyCallback={(response) => {
              API.verifyReCaptcha({
                secret: process.env.REACT_APP_RECAPTCHA_SECRET,
                response: response
              })
              .then(res => {
                // Check if Recaptcha is successful
                // console.log(res.data);
                if(res.data.success) {
                  this.setState({ isVerified: true });
                } else {
                  // We have a robot...
                }
              })
              .catch(err => console.log(err));
            }}
          />
          <button disabled={isInvalid} className="btn indigo darker-4" type="submit">Sign Up</button>
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
