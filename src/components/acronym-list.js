import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';

import {fetchAcronyms} from '../actions/acronyms';

import AcronymListTable from './acronym-list-table';

export class AcronymList extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchAcronyms());
  }
  render() {
    // Display a spinner if fetching data
    if (this.props.loading) {
      return <Spinner name='folding-cube' fadeIn='none' />;
    }
    return (<AcronymListTable acronymList={this.props.acronyms}/>);
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  acronyms: state.acronyms.acronyms,
  loading: state.acronyms.loading
});

export default connect(mapStateToProps)(AcronymList);
