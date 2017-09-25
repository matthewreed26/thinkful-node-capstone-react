import React from 'react';
//import {Link} from 'react-router-dom';

export default function ModifyAcronym(props) {
  const editAcronym = (<tr>
    <td><input type='text' title="modify acronym"
        onChange={(event)=>{props.trackAcronymChanges(event.target.value)}}
        placeholder={props.acronymChangesObj.acronym} /></td>
    <td><textarea rows="1" cols="50" title="modify acronym definition"
        onChange={(event)=>props.trackDefinitionChanges(event.target.value)}
        placeholder={props.acronymChangesObj.definition} /></td>
    <td><button onClick={()=>props.saveChanges()}>Save</button>
        &nbsp;|&nbsp;
        <button onClick={()=>props.cancelEditing()}>Cancel</button>
        &nbsp;|&nbsp;
        <button onClick={()=>props.delete()}>Delete</button>
    </td>
    </tr>);
  return (
     <table>
        <thead><tr><th>Acronym</th><th>Definition</th><th>Actions</th></tr></thead>
        <tbody>{editAcronym}</tbody>
     </table>
   );
}
