import * as actions from '../actions';

const initialState = {
    acronyms: [],
    finderVal: '',
    finderResults: []
};

export const acronymFinderReducer = (state=initialState, action) => {
    if (action.type === actions.FETCH_ACRONYMS_SUCCESS) {
        return Object.assign({}, state, {
          acronyms:action.acronyms
        });
    } else if (action.type === actions.SET_FINDER_VAL) {
        return Object.assign({}, state, {
          finderVal:action.finderVal
        });
    } else if (action.type === actions.SET_FINDER_RESULTS) {
        return Object.assign({}, state, {
          finderResults:action.finderResults
        });
    }
    return state;
};
