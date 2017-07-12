import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import './sidebar.css';

export function Navigation(props) {
    return (
        <div>
            <nav>
              <Link to={'/search'}>Search</Link>&nbsp;|&nbsp;
              <Link to={'/acronym-list'}>All Acronyms</Link>
            </nav>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    acronyms: state.acronyms,
    finderVal: state.finderVal,
    finderResults: state.finderResults
});

export default connect(mapStateToProps)(Navigation);
