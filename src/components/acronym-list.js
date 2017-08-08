import React from 'react';
//import {Link} from 'react-router-dom';
//import './email-list.css';

export function AcronymList(props) {
    const acronyms = props.acronyms.map((acronym, index) => {
      const modifyColumn = (props.setEditing?
        <td><button onClick={()=>
          props.setEditing(acronym)}>Modify</button></td>
        :'');
      return (<tr key={index}>
        <td>{acronym.acronym}</td>
        <td>{acronym.definition}</td>
        {modifyColumn}
        </tr>);
    });
    const actionsColumn = (props.setEditing?<th>Actions</th>:'');
    return (
  	   <table>
          <thead><tr><th>Acronym</th><th>Definition</th>{actionsColumn}</tr></thead>
          <tbody>{acronyms}</tbody>
  	   </table>
    );
}
