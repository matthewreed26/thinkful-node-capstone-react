import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

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
                <nav>
                  <Link to={'/search'}>Search</Link>&nbsp;|&nbsp;
                  <Link to={'/acronym-list'}>All Acronyms</Link>
                  <button onClick={() => this.logOut()}>Log out</button>
                </nav>
            );
        }
        return (
            <div className="header-bar">
                {headers}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
