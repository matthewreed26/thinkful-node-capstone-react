import React from 'react';
import { Button, Table } from 'react-bootstrap';

export default function ModifyAcronym(props) {
  const editAcronym = (<tr>
    <td><input type='text' title="modify acronym"
        onChange={(event)=>{props.trackAcronymChanges(event.target.value)}}
        placeholder={props.acronymChangesObj.acronym} /></td>
    <td><textarea rows="1" cols="50" title="modify acronym definition"
        onChange={(event)=>props.trackDefinitionChanges(event.target.value)}
        placeholder={props.acronymChangesObj.definition} /></td>
    <td><Button onClick={()=>props.saveChanges()}>Save</Button>
        &nbsp;|&nbsp;
        <Button onClick={()=>props.cancelEditing()}>Cancel</Button>
        &nbsp;|&nbsp;
        <Button onClick={()=>props.delete()}>Delete</Button>
    </td>
    </tr>);
  return (
     <Table>
        <thead><tr><th>Acronym</th><th>Definition</th><th>Actions</th></tr></thead>
        <tbody>{editAcronym}</tbody>
     </Table>
   );
}
