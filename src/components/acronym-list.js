import React from 'react';
import {connect} from 'react-redux';

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
    return (<AcronymListTable acronymList={this.props.acronyms}/>);
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  acronyms: state.acronyms.acronyms
});

export default connect(mapStateToProps)(AcronymList);
