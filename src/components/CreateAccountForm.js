import React from 'react'
import { connect } from 'react-redux';
import { firebase } from '../firebase/firebase';

export default class EmailLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    };
  }

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
    console.log(lastName);
  }

  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
    console.log(firstName);
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
    console.log(email);
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
    console.log(password);
  }

  onPasswordConfirmationChange = (e) => {
    const passwordConfirmation = e.target.value;
    this.setState(() => ({ passwordConfirmation }));
    console.log(passwordConfirmation);
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log("create account on submit fired");

    let errorCode = null;
    let errorMessage = null;
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      // Handle Errors here.
      errorCode = error.code;
      errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        this.setState(() => ({error: 'Weak Password'}));
      } else if (this.state.password !== this.state.passwordConfirmation) {
        this.setState(() => ({error: 'Passwords do not match'}))
      } else {
        this.setState(() => ({error: errorMessage}));
      }
    }).then(() => {
      console.log("errorMessage", errorMessage);
      if (errorCode === null && errorMessage === null) {
        this.props.history.push('/dashboard');
      }
    });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Create Account</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="First Name"
              autoFocus
              className="text-input"
              value={this.state.firstName}
              onChange={this.onFirstNameChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="text-input"
              value={this.state.lastName}
              onChange={this.onLastNameChange}
            />
            <input
              type="text"
              placeholder="Email"
              className="text-input"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            <input
              type="text"
              placeholder="Password"
              className="text-input"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="text-input"
              value={this.state.passwordConfirmation}
              onChange={this.onPasswordConfirmationChange}
            />
            <div>
              <button className="button">Create Account</button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}


// const mapDispatchToProps = (dispatch) => ({
//   startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password))
// });
//
// export default connect(undefined, mapDispatchToProps)(EmailLoginForm)
