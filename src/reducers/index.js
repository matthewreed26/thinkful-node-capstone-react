import * as actions from '../actions';

const initialState = {
    acronyms: [],
    finderVal: '',
    finderResults: [],
    addVal: '',
    acronymConfirmation: ''
};

export const acronymFinderReducer = (state=initialState, action) => {
    if (action.type === actions.FETCH_ACRONYMS_SUCCESS) {
        return Object.assign({}, state, {
          acronyms:action.acronyms,
          acronymConfirmation:''
        });
    } else if (action.type === actions.ADD_UPDATE_ACRONYM_SUCCESS) {
        return Object.assign({}, state, {
          acronymConfirmation:action.acronymConfirmation
        });
    } else if (action.type === actions.SET_FINDER_VAL) {
        return Object.assign({}, state, {
          finderVal:action.finderVal,
          acronymConfirmation:''
        });
    } else if (action.type === actions.SET_FINDER_RESULTS) {
        return Object.assign({}, state, {
          finderResults:action.finderResults,
          acronymConfirmation:''
        });
    } else if (action.type === actions.SET_ADD_VAL) {
        return Object.assign({}, state, {
          addVal:action.addVal,
          acronymConfirmation:''
        });
    }
    return state;
};
