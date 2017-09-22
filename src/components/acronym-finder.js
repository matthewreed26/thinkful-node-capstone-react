import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

import Search from './search';
import AcronymList from './acronym-list';

export function AcronymFinder(props){
  // Only visible to logged in users
  if (!props.loggedIn) {
    return (<Redirect to="/login" />);
  }

  return (
    <main>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/acronym-list" component={AcronymList} />
    </main>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default withRouter(connect(mapStateToProps)(AcronymFinder));
