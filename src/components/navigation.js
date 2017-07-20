import React from 'react';
import {Link} from 'react-router-dom';
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
