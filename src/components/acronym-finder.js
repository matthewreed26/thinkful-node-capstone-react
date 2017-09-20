import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

import {fetchAcronyms, setFinderVal,
	setFinderResults, setAddVal, postAcronym, setEditing,
	setAcronymChangesVal, setDefinitionChangesVal} from '../actions/acronyms';

import {Search} from './search';
import {AddAcronym} from './add-acronym';
import {ModifyAcronym} from './modify-acronym';
import {AcronymList} from './acronym-list';

export class AcronymFinder extends React.Component{
	componentDidMount(){
    if (!this.props.loggedIn) {
        return;
    }
		this.props.dispatch(fetchAcronyms());
	}

	findVal(val){
		return val?this.props.acronyms.filter(
		  	(acronym)=>String(acronym.acronym).toLowerCase().includes(String(val).toLowerCase())):[];
	}

	setEditing(acronym){
		let acronymChangesVal = '';
		let definitionChangesVal = '';
		let editing = false;
		if(acronym){
			acronymChangesVal = acronym.acronym;
			definitionChangesVal = acronym.definition;
			editing = true;
		}
		this.props.dispatch(setAcronymChangesVal(acronymChangesVal));
		this.props.dispatch(setDefinitionChangesVal(definitionChangesVal));
		this.props.dispatch(setEditing(editing));
	}

	saveChanges(){
		console.log({acronym:this.props.acronymChangesVal,
								 definition:this.props.definitionChangesVal});
	}

  render() {
    // Only visible to logged in users
    if (!this.props.loggedIn) {
      return (<Redirect to="/login" />);
    }

    const message = this.props.finderVal
      ? (!this.props.finderResults.length
        ? <div>
            <div>Acronym not found for
              <strong>{this.props.finderVal}</strong>...</div>
            <AddAcronym finderVal={this.props.finderVal} addVal={this.props.addVal} onChange={(value) => this.props.dispatch(setAddVal(value))} onSubmit={(value) => this.props.dispatch(postAcronym({acronym: this.props.finderVal, definition: value}))}/></div>
        : '')
      : '';
    return (
      <div>
        <Route exact path="/search" render={() =>< div > {
          this.props.editing
            ? <ModifyAcronym trackAcronymChanges={(value) => this.props.dispatch(setAcronymChangesVal(value))} acronymChangesVal={this.props.acronymChangesVal} trackDefinitionChanges={(value) => this.props.dispatch(setDefinitionChangesVal(value))} definitionChangesVal={this.props.definitionChangesVal} setEditing={() => this.setEditing()} saveChanges={() => this.saveChanges()}/>
            : <Search trackFinderChanges={(value) => {
                this.props.dispatch(setFinderVal(value));
                this.props.dispatch(setFinderResults(this.findVal(value)));
              }} finderVal={this.props.finderVal} finderResults={this.props.finderResults} setEditing={(acronym) => this.setEditing(acronym)}/>
        }
        {
          this.props.acronymConfirmation
            ? `'${this.props.acronymConfirmation.acronym}:${this.props.acronymConfirmation.definition}' was successfully added/modified!`
            : message
        } < /div>}/>
        <Route exact path="/acronym-list" render={() =>< AcronymList acronyms = {
          this.props.acronyms
        } />}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    acronyms: state.acronyms,
		finderVal: state.finderVal,
		finderResults: state.finderResults,
		addVal: state.addVal,
		acronymConfirmation: state.acronymConfirmation,
    editing: state.editing,
    acronymChangesVal: state.acronymChangesVal,
    definitionChangesVal: state.definitionChangesVal
});

export default withRouter(connect(mapStateToProps)(AcronymFinder));
