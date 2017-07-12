import React from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import './email-list.css';
import {AcronymList} from './acronym-list';

export function Search(props) {
    const message = props.finderVal?
      (!props.finderResults.length?
        <div><div>Acronym not found for <strong>{props.finderVal}</strong>...</div>
        <div>Would you like to add <strong>{props.finderVal}</strong> to the list of all acronyms?</div></div>:'')
        :'';
    return (
        <div>
          <h4>Enter an Acronym:</h4>
  				<input type='text' onChange={(event)=>{
  					props.onChange(event.target.value);
  				}}/>
          {message}
          {props.finderResults.length?
            <AcronymList acronyms={props.finderResults} />:''}
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        acronyms: state.acronyms,
    		finderVal: state.finderVal,
    		finderResults: state.finderResults
    }
};

export default connect(mapStateToProps)(Search);
