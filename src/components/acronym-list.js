import React from 'react';
//import {Link} from 'react-router-dom';
//import './email-list.css';

export function AcronymList(props) {
    const acronyms = props.acronyms.map((acronym, index) => {
      return (<tr key={index}><td>{acronym.acronym}</td><td>{acronym.definition}</td></tr>);
    });
    return (
  	   <table>
  				<tr><th>Acronym</th><th>Definition</th></tr>
  				{acronyms}
  	   </table>
    );
}
