import React from 'react';
//import {Link} from 'react-router-dom';
//import './email-list.css';
import {AcronymList} from './acronym-list';

export function Search(props) {
    return (
        <div>
          <h4>Enter an Acronym:</h4>
  				<input type='text' onChange={(event)=>{
  					props.onChange(event.target.value);
  				}}/>
          {props.finderResults.length?
            <AcronymList acronyms={props.finderResults} />:''}
        </div>
    );
}
