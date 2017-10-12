import React from 'react';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default function HeaderBar(props){
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/search">Acronym Finder</Link>
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
            <NavItem onClick={ () => {
                props.dispatch(setCurrentUser(null));
                props.dispatch(setAuthToken(null));
                clearAuthToken();
              } }>Log out
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
