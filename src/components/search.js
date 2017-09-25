import React from 'react';
import {connect} from 'react-redux';

import {
  fetchAcronyms,
  setFinderVal,
  setFinderResults,
  setAddVal,
  postAcronym,
  putAcronym,
  setEditing,
  setAcronymChangesVal
} from '../actions/acronyms';

import AddAcronym from './add-acronym';
import ModifyAcronym from './modify-acronym';
import AcronymListTable from './acronym-list-table';

export class Search extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchAcronyms());
  }

  setEditing(acronym) {
    let acronymChangesVal = '';
    let editing = false;
    if (acronym) {
      acronymChangesVal = acronym;
      editing = true;
    }
    this.props.dispatch(setAcronymChangesVal(acronymChangesVal));
    this.props.dispatch(setEditing(editing));
  }

  findVal(val) {
    return val
      ? this.props.acronyms.filter((acronym) => String(acronym.acronym).toLowerCase().includes(String(val).toLowerCase()))
      : [];
  }

  saveChanges() {
    console.log({acronym: this.props.acronymChangesVal, definition: this.props.definitionChangesVal});
  }

  render() {
    const message = this.props.finderVal
      ? (!this.props.finderResults.length
        ? <div>
            <div>Acronym not found for <strong>{this.props.finderVal}</strong>...</div>
            <AddAcronym finderVal={this.props.finderVal} addVal={this.props.addVal} onChange={(value) => this.props.dispatch(setAddVal(value))} onSubmit={(value) => this.props.dispatch(postAcronym({acronym: this.props.finderVal, definition: value}))}/></div>
        : '')
      : '';
    if (this.props.editing) {
      return (<ModifyAcronym trackAcronymChanges={(value) => this.props.dispatch(setAcronymChangesVal({id:this.props.acronymChangesVal.id, acronym: value, definition:this.props.acronymChangesVal.definition}))} acronymChangesVal={this.props.acronymChangesVal} trackDefinitionChanges={(value) => this.props.dispatch(setAcronymChangesVal({id:this.props.acronymChangesVal.id, acronym: this.props.acronymChangesVal.acronym, definition:value}))} setEditing={() => this.setEditing()} saveChanges={() =>{ this.props.dispatch(putAcronym(this.props.acronymChangesVal)); this.setEditing();}}/>);
    }
    return (
      <div>
        <h4>Enter an Acronym:</h4>
        <input type='text' onChange={(event) => {
          this.props.dispatch(setFinderVal(event.target.value));
          this.props.dispatch(setFinderResults(this.findVal(event.target.value)));
        }}/> {(this.props.finderResults && this.props.finderResults.length)
          ? <AcronymListTable acronymList={this.props.finderResults} setEditing={(acronym) => this.setEditing(acronym)}/>
          : ''}
        {this.props.acronymConfirmation
          ? `'${this.props.acronymConfirmation.acronym}:${this.props.acronymConfirmation.definition}' was successfully added/modified!`
          : message
}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  acronyms: state.acronyms.acronyms,
  finderVal: state.acronyms.finderVal,
  finderResults: state.acronyms.finderResults,
  addVal: state.acronyms.addVal,
  acronymConfirmation: state.acronyms.acronymConfirmation,
  editing: state.acronyms.editing,
  acronymChangesVal: state.acronyms.acronymChangesVal,
  definitionChangesVal: state.acronyms.definitionChangesVal
});

export default connect(mapStateToProps)(Search);
