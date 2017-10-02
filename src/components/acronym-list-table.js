import React from 'react';

export default function AcronymListTable(props){
  const acronymRows = props.acronymList.map((acronym, index) => {
    //only if the setEditing function is defined
    if(props.setEditing){
      return (
        <tr key={index}>
          <td>{acronym.acronym}</td>
          <td>{acronym.definition}</td>
          <td>
            <button onClick={() => props.setEditing(acronym)}>Modify</button>
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
      <table>
        <thead>
          <tr>
            <th>Acronym</th>
            <th>Definition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{acronymRows}</tbody>
      </table>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Acronym</th>
          <th>Definition</th>
        </tr>
      </thead>
      <tbody>{acronymRows}</tbody>
    </table>
  );
}
