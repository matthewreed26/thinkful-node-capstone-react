import React from 'react';
import { Button } from 'react-bootstrap';

export default function AddAcronym(props) {
    return (
      <div className="row">
        <div className="col-md-12">Would you like to add <strong>{props.finderVal}</strong> to the list of all acronyms?</div>
        <form onSubmit={(event)=>{
			        event.preventDefault();
			        props.onSubmit(props.addVal)}}>
            <label htmlFor="addValInput">If so, provide a definition:</label>
            <br/>
            <textarea rows="1" cols="50" id="addValInput" onChange={(event)=>props.onChange(event.target.value)} />
            <br/>
            <Button>Add</Button>
        </form>
      </div>
    );
}
