import React from 'react'
import { connect } from 'react-redux';
import { firebase } from '../firebase/firebase';

export default class EmailLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
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

  onSubmit = (e) => {
    e.preventDefault();

    let errorCode = null;
    let errorMessage = null;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      errorCode = error.code;
      errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        this.setState(() => ({error: 'Incorrect password'}));
      } else {
        this.setState(() => ({error: errorMessage}));
      }
    });

    if (errorCode === null && errorMessage === null) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Login</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Email"
              autoFocus
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
            <div>
              <button className="button">Login</button>
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
