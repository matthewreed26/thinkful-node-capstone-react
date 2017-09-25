import React from 'react';
import {connect} from 'react-redux';

import {fetchAcronyms} from '../actions/acronyms';

export class AcronymList extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    // if (!this.props.acronyms) {
      this.props.dispatch(fetchAcronyms());
    // }
  }
  render() {
    const acronyms = this.props.acronyms.map((acronym, index) => {
      const modifyColumn = (this.props.setEditing
        ? <td>
            <button onClick={() => this.props.setEditing(acronym)}>Modify</button>
          </td>
        : '');
      return (
        <tr key={index}>
          <td>{acronym.acronym}</td>
          <td>{acronym.definition}</td>
          {modifyColumn}
        </tr>
      );
    });
    const actionsColumn = (this.props.setEditing
      ? <th>Actions</th>
      : '');
    return (
      <table>
        <thead>
          <tr>
            <th>Acronym</th>
            <th>Definition</th>{actionsColumn}</tr>
        </thead>
        <tbody>{acronyms}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  acronyms: state.acronyms.acronyms
});

export default connect(mapStateToProps)(AcronymList);
