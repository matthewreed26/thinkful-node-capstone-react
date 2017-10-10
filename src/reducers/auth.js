import * as actions from '../actions/auth';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  if (action.type === actions.SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken,
      loading: false
    });
  } else if (action.type === actions.SET_CURRENT_USER) {
    return Object.assign({}, state, {
      currentUser: action.currentUser,
      loading: false
    });
  } else if (action.type === actions.DATA_LOADING) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  return state;
}
