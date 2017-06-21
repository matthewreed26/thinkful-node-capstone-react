import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {acronymFinderReducer} from './reducers';

export default createStore(acronymFinderReducer, applyMiddleware(thunk));
