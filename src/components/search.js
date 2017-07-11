import React from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import './email-list.css';
import {AcronymList} from './acronym-list';

export function Search(props) {
    function findVal(val){
      return val?props.acronyms.filter(
        (acronym)=>String(acronym.acronym).toLowerCase().includes(String(val).toLowerCase())):[];
    }
    // let results = showResults(findVal(props.finderVal));
    // function showResults(valResults){
    //   results = valResults.length?Array(valResults).map((acronym, index) => {
    //     return (<tr key={index}><td>{acronym.acronym}</td><td>{acronym.definition}</td></tr>);
    //   }):[];
    // }
    return (
        <div>
  				<input type='text' onChange={(event)=>{
  					props.onChange(findVal(event.target.value));
  				}}/>
        	<AcronymList acronyms={props.finderVal} />
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
