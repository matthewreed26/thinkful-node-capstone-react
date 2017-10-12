import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/search" />;
  }
  // Display a spinner if fetching data
  if (props.loading) {
    return <Spinner name="folding-cube" fadeIn="none" />;
  }
  return (
    <div className="home">
      <h2>Register for Acronym Finder</h2>
      <RegistrationForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(RegistrationPage);
