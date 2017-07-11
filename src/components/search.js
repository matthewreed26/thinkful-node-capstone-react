import React from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import './email-list.css';
import {AcronymList} from './acronym-list';

export function Search(props) {
    const results = props.finderVal.length?
      <AcronymList acronyms={props.finderVal} />:<div>Acronym Not Found</div>;
    return (
        <div>
          <h4>Enter an Acronym:</h4>
  				<input type='text' onChange={(event)=>{
  					props.onChange(event.target.value);
  				}}/>
        	{results}
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        acronyms: state.acronyms,
    		finderVal: state.finderVal
    }
};

export default connect(mapStateToProps)(Search);
