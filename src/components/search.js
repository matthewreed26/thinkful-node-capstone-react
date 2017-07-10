import React from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import './email-list.css';

export function Search(props) {
    return (
        <div>
  				<input type='text' onChange={(event)=>{
  					props.onChange(event.target.value);
  				}}/>
  				<div>{props.finderVal}</div>
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
