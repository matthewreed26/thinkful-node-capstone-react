import React from 'react';
//import {Link} from 'react-router-dom';
//import './email-list.css';

export function AcronymList(props) {
    const acronyms = props.acronyms.map((acronym, index) => {
      return (<tr key={index}>
        <td>{acronym.acronym}</td>
        <td>{acronym.definition}</td>
        <td><button onClick={()=>
          props.setEditing(acronym, true)}>Modify</button></td>
        </tr>);
    });
    let editAcronym = '';
    if(props.isEditing){
      editAcronym = (<tr>
        <td><input type='text' title="modify acronym"
            onChange={(event)=>{props.trackAcronymChanges(event.target.value)}}
            placeholder={props.acronymChangesVal} /></td>
        <td><textarea rows="1" cols="50" title="modify acronym definition"
            onChange={(event)=>props.trackDefinitionChanges(event.target.value)}
            placeholder={props.definitionChangesVal} /></td>
        <td><button onClick={()=>props.saveChanges()}>Save</button>
            &nbsp;|&nbsp;
            <button onClick={()=>props.setEditing(null, false)}>Cancel</button>
        </td>
        </tr>);
    }
    return (
  	   <table>
          <thead><tr><th>Acronym</th><th>Definition</th><th>Action</th></tr></thead>
          <tbody>{editAcronym || acronyms}</tbody>
  	   </table>
    );
}
