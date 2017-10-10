import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import { Button } from 'react-bootstrap';

import {
  fetchAcronyms,
  setFinderVal,
  setFinderResults,
  setAddVal,
  postAcronym,
  putAcronym,
  deleteAcronym,
  setEditing,
  setChangesId,
  setAcronymChangesVal,
  setDefinitionChangesVal,
  dismissAcronymSuccess
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
    let changesId = '';
    let acronymChangesVal = '';
    let definitionChangesVal = '';
    let editing = false;
    if (acronym) {
      changesId = acronym.id;
      acronymChangesVal = acronym.acronym;
      definitionChangesVal = acronym.definition;
      editing = true;
    }
    this.props.dispatch(setChangesId(changesId));
    this.props.dispatch(setAcronymChangesVal(acronymChangesVal));
    this.props.dispatch(setDefinitionChangesVal(definitionChangesVal));
    this.props.dispatch(setEditing(editing));
  }

  findVal(val) {
    return val
      ? this.props.acronyms.filter((acronym) => String(acronym.acronym).toLowerCase().includes(String(val).toLowerCase()))
      : [];
  }

  resetSearch() {
    this.setEditing();
    this.props.dispatch(setAddVal(null));
    this.props.dispatch(setAcronymChangesVal(null));
    this.props.dispatch(fetchAcronyms());
    this.props.dispatch(setFinderVal(null));
    this.props.dispatch(setFinderResults([]));
  }

  render() {
    // Display a spinner if fetching data
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }
    const confirmationMessage = this.props.acronymConfirmation && this.props.acronymConfirmation.acronym
    ? <div className="row"><div className="col-md-12">'{this.props.acronymConfirmation.acronym}:{this.props.acronymConfirmation.definition}' was successfully added/modified! <Button onClick={()=>this.props.dispatch(dismissAcronymSuccess())}>Dismiss</Button></div></div>
    : (this.props.acronymConfirmation ? <div className="row"><div className="col-md-12">this.props.acronymConfirmation <Button onClick={()=>this.props.dispatch(dismissAcronymSuccess())}>Dismiss</Button></div></div> : '');
    const notFoundMessage = this.props.finderVal
      ? (!this.props.finderResults.length
        ? <div className="row"><div className="col-md-12">Acronym not found for <strong>{this.props.finderVal}</strong>...</div>
            <AddAcronym finderVal={this.props.finderVal} addVal={this.props.addVal} onChange={(value) => this.props.dispatch(setAddVal(value))} onSubmit={(value) => this.props.dispatch(postAcronym({acronym: this.props.finderVal, definition: value}))}/></div>
        : '')
      : '';
    if (this.props.editing) {
      return (<ModifyAcronym trackAcronymChanges={(value) => this.props.dispatch(setAcronymChangesVal(value))} acronymChangesObj={{acronym:this.props.acronymChangesVal, definition:this.props.definitionChangesVal}} trackDefinitionChanges={(value) => this.props.dispatch(setDefinitionChangesVal(value))} cancelEditing={() => this.setEditing()} saveChanges={() =>{ this.props.dispatch(putAcronym({id:this.props.changesId, acronym:this.props.acronymChangesVal, definition:this.props.definitionChangesVal})); this.resetSearch();}} delete={() =>{ this.props.dispatch(deleteAcronym(this.props.changesId)); this.resetSearch();}}/>);
    }
    return (
      <div>
        {confirmationMessage}
        <h4>Enter an Acronym:</h4>
        <input type='text' onChange={(event) => {
          this.props.dispatch(setFinderVal(event.target.value));
          this.props.dispatch(setFinderResults(this.findVal(event.target.value)));
        }}/> {(this.props.finderResults && this.props.finderResults.length)
          ? <AcronymListTable acronymList={this.props.finderResults} setEditing={(acronym) => { this.props.dispatch(dismissAcronymSuccess()); this.setEditing(acronym);}}/>
          : ''}
        {notFoundMessage}
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
  changesId: state.acronyms.changesId,
  acronymChangesVal: state.acronyms.acronymChangesVal,
  definitionChangesVal: state.acronyms.definitionChangesVal,
  loading: state.acronyms.loading
});

export default connect(mapStateToProps)(Search);
