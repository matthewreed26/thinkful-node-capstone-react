import React from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export function AddAcronym(props) {
    return (
      <div>
        <div>Would you like to add <strong>{props.finderVal}</strong> to the list of all acronyms?</div>
        <form onSubmit={(event)=>{
			        event.preventDefault();
			        props.onSubmit(props.addVal)}}>
            <label for="addValInput">If so, provide a definition:</label>
            <textarea rows="1" cols="50" id="addValInput" onChange={(event)=>props.onChange(event.target.value)} />
            <button>Add</button>
        </form>
      </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
    		finderVal: state.finderVal,
        addVal: state.addVal
    }
};

export default connect(mapStateToProps)(AddAcronym);
