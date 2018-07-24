import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <div className="content-container">
        <Link className="button" to="/emailloginform">Login with Email</Link>
        <Link className="button button-stack" to="/create-account-form">Create Account</Link>
        <button className="button button-stack" onClick={startGoogleLogin}>Login with Google</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
