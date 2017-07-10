import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import {fetchAcronyms, setFinderVal} from '../actions';

import {Search} from './search';
import {AllList} from './all-list';
import {Navigation} from './navigation';

export class AcronymFinder extends React.Component{
	constructor(props){
		super(props);

    this.props.dispatch(fetchAcronyms());
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
											onChange={(value)=>this.props.dispatch(setFinderVal(value))}
											finderVal={this.props.finderVal} />} />
                <Route exact path="/all-list"
										render={()=><AllList acronyms={this.props.acronyms} />} />
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
