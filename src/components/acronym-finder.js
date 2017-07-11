import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import {fetchAcronyms, setFinderVal} from '../actions';

import {Search} from './search';
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

	render(){
		return (
			<Router>
				<div>
						<Navigation />
            <main>
                <Redirect from="/" to="/search" />
                <Route exact path="/search"
										render={()=><Search
											onChange={(value)=>this.props.dispatch(setFinderVal(this.findVal(value)))}
											finderVal={this.props.finderVal} />} />
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
		finderVal: state.finderVal
});

export default connect(mapStateToProps)(AcronymFinder);
