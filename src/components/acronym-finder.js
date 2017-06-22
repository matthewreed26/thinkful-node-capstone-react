import React from 'react';
import {connect} from 'react-redux';

import {fetchAcronyms, setFinderVal} from '../actions';

export class AcronymFinder extends React.Component{
	constructor(props){
		super(props);

    this.props.dispatch(fetchAcronyms());
	}

	render(){
    const acronyms = this.props.acronyms.map((acronym, index) => {
	  	return (<tr key={index}><td>{acronym.acronym}</td><td>{acronym.definition}</td></tr>);
    });
		return (
			<div>
				<input type='text' onChange={(event)=>{
					this.props.dispatch(setFinderVal(event.target.value));
				}}/>
				<div>{this.props.finderVal}</div>
				<div>All Acronyms:</div>
				<table>
				<tr><th>Acronym</th><th>Definition</th></tr>
				{acronyms}
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
    acronyms: state.acronyms,
		finderVal: state.finderVal,
		foundAcronym: state.foundAcronym
});

export default connect(mapStateToProps)(AcronymFinder);
