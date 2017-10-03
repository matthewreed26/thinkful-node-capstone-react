import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  render() {
    // Only render the links and log out button if we are logged in
    let headers;
    if (this.props.loggedIn) {
      headers = (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/search">Acronym Finder</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/search">
                <NavItem eventKey={1}>Search</NavItem>
              </LinkContainer>
              <LinkContainer to="/acronym-list">
                <NavItem eventKey={2}>All Acronyms</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem eventKey={1}>
                  <Button onClick={ () => this.logOut() }>Log out</Button>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    return (
      <div>
        {headers}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
