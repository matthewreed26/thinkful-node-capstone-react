import * as actions from '../actions';

const initialState = {
    acronyms: []
};

export const acronymFinderReducer = (state=initialState, action) => {
    if (action.type === actions.FETCH_ACRONYMS_SUCCESS) {
        return {acronyms:action.acronyms};
    }
    return state;
};
