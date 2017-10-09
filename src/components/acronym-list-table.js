import React from 'react';
import { Button, Table } from 'react-bootstrap';

export default function AcronymListTable(props){
  const acronymRows = props.acronymList.map((acronym, index) => {
    //only if the setEditing function is defined
    if(props.setEditing){
      return (
        <tr key={index}>
          <td>{acronym.acronym}</td>
          <td>{acronym.definition}</td>
          <td>
            <Button onClick={() => props.setEditing(acronym)}>Modify</Button>
          </td>
        </tr>
      );
    }
    return (
      <tr key={index}>
        <td>{acronym.acronym}</td>
        <td>{acronym.definition}</td>
      </tr>
    );
  });

  //only if the setEditing function is defined
  if(props.setEditing){
    return (
      <Table>
        <thead>
          <tr>
            <th>Acronym</th>
            <th>Definition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{acronymRows}</tbody>
      </Table>
    );
  }
  return (
    <Table>
      <thead>
        <tr>
          <th>Acronym</th>
          <th>Definition</th>
        </tr>
      </thead>
      <tbody>{acronymRows}</tbody>
    </Table>
  );
}
