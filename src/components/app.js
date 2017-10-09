import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import HeaderBar from './header-bar';
import LoginPage from './login-page';
import AcronymFinder from './acronym-finder';
import RegistrationPage from './registration-page';

export class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Route exact path="/login" component={LoginPage}/>
              <AcronymFinder/>
              <Route exact path="/register" component={RegistrationPage}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
