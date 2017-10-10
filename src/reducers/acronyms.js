import * as actions from '../actions/acronyms';

const initialState = {
  acronyms: [],
  finderVal: '',
  finderResults: [],
  addVal: '',
  acronymConfirmation: '',
  editing: false,
  changesId: '',
  acronymChangesVal: '',
  definitionChangesVal: '',
  loading: false
};

export default function reducer(state = initialState, action) {
  if (action.type === actions.FETCH_ACRONYMS_SUCCESS) {
    return Object.assign({}, state, {
      acronyms: action.acronyms,
      loading: false
    });
  } else if (action.type === actions.ADD_UPDATE_ACRONYM_SUCCESS) {
    return Object.assign({}, state, {
      acronymConfirmation: action.acronymConfirmation,
      loading: false
    });
  } else if (action.type === actions.DISMISS_ACRONYM_SUCCESS) {
    return Object.assign({}, state, {
      acronymConfirmation: '',
      loading: false
    });
  } else if (action.type === actions.DATA_LOADING) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === actions.SET_FINDER_VAL) {
    return Object.assign({}, state, {
      finderVal: action.finderVal
    });
  } else if (action.type === actions.SET_FINDER_RESULTS) {
    return Object.assign({}, state, {
      finderResults: action.finderResults
    });
  } else if (action.type === actions.SET_ADD_VAL) {
    return Object.assign({}, state, {
      addVal: action.addVal
    });
  } else if (action.type === actions.SET_EDITING) {
    return Object.assign({}, state, {
      editing: action.editing
    });
  } else if (action.type === actions.SET_CHANGES_ID) {
    return Object.assign({}, state, {
      changesId: action.changesId
    });
  } else if (action.type === actions.SET_ACRONYM_CHANGES_VAL) {
    return Object.assign({}, state, {
      acronymChangesVal: action.acronymChangesVal
    });
  } else if (action.type === actions.SET_DEFINITION_CHANGES_VAL) {
    return Object.assign({}, state, {
      definitionChangesVal: action.definitionChangesVal
    });
  }
  return state;
}
