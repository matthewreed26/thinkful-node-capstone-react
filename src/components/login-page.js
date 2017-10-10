import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the search
    if (props.loggedIn) {
        return <Redirect to="/search" />;
    }
    // Display a spinner if fetching data
    if (props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    return (
        <div className="home">
            <h2>Welcome to Acronym Finder</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading
});

export default connect(mapStateToProps)(LoginPage);
