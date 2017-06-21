import React from 'react';
import {connect} from 'react-redux';

import {fetchAcronyms} from '../actions';

export class AcronymFinder extends React.Component{
	constructor(props){
		super(props);

    this.props.dispatch(fetchAcronyms());
	}

	render(){
    const acronyms = this.props.acronyms.map((acronym, index) => {
      return (<div key={index}>{index}::{acronym.acronym}::{acronym.definition}</div>)
    });
		return (
			<div>{acronyms}</div>
		);
	}
}

AcronymFinder.defaultProps = {
	acronyms: []
}

const mapStateToProps = state => ({
    acronyms: state.acronyms
});

export default connect(mapStateToProps)(AcronymFinder);
