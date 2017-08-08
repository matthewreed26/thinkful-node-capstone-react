import React from 'react';
//import {Link} from 'react-router-dom';
//import './email-list.css';
import {AcronymList} from './acronym-list';
import {ModifyAcronym} from './modify-acronym';

export function Search(props) {
    return (
        <div>
          <h4>Enter an Acronym:</h4>
  				<input type='text' onChange={(event)=>{
  					props.trackFinderChanges(event.target.value);
  				}}/>
          {props.finderResults.length?(
            props.isEditing?
              <ModifyAcronym
                acronymChangesVal={props.acronymChangesVal}
                trackAcronymChanges={(value)=>props.trackAcronymChanges(value)}
                trackDefinitionChanges={(value)=>props.trackDefinitionChanges(value)}
                definitionChangesVal={props.definitionChangesVal}
                setEditing={()=>props.setEditing(null, false)}
                saveChanges={()=>props.saveChanges()} />
              :<AcronymList acronyms={props.finderResults}
                setEditing={(acronym)=>props.setEditing(acronym, true)} />
            )
            :''}
        </div>
    );
}
