import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import {fetchAcronyms, setFinderVal, setFinderResults, setAddVal} from '../actions';

import {Search} from './search';
import {AddAcronym} from './add-acronym';
import {AcronymList} from './acronym-list';
import {Navigation} from './navigation';

export class AcronymFinder extends React.Component{
	constructor(props){
		super(props);

    this.props.dispatch(fetchAcronyms());
	}

	findVal(val){
		return val?this.props.acronyms.filter(
		  	(acronym)=>String(acronym.acronym).toLowerCase().includes(String(val).toLowerCase())):[];
	}

	dummyAdd(val){
		//will add later
		return val;
	}

	render(){
    const message = this.props.finderVal?
      (!this.props.finderResults.length?
        <div><div>Acronym not found for <strong>{this.props.finderVal}</strong>...</div>
        <AddAcronym finderVal={this.props.finderVal}
                    addVal={this.props.addVal}
                    onChange={(value)=>this.props.dispatch(setAddVal(value))}
										onSubmit={(value)=>this.dummyAdd({acronym:this.props.finderVal, definition:value})} /></div>:'')
        :'';
		return (
			<Router>
				<div>
						<Navigation />
            <main>
                <Redirect from="/" to="/search" />
                <Route exact path="/search"
										render={()=><div>
											<Search
											onChange={(value)=>{
												this.props.dispatch(setFinderVal(value));
												this.props.dispatch(setFinderResults(this.findVal(value)));
											}}
											finderVal={this.props.finderVal}
											finderResults={this.props.finderResults} />
							        {message}
										</div>} />
                <Route exact path="/acronym-list"
										render={()=><AcronymList acronyms={this.props.acronyms} />} />
            </main>
					</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
    acronyms: state.acronyms,
		finderVal: state.finderVal,
		finderResults: state.finderResults,
		addVal: state.addVal
});

export default connect(mapStateToProps)(AcronymFinder);
