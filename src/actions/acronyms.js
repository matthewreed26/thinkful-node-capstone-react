import axios from 'axios';
import qs from 'qs';
import { API_BASE_URL } from '../config';

const ACRONYMS_URL = API_BASE_URL + '/acronyms';
export const fetchAcronyms= () => (dispatch, getState) => {
    dispatch(dataLoading());
    const authToken = getState().auth.authToken;
    axios.get(ACRONYMS_URL, {
        headers: { Authorization: `Bearer ${authToken}` }
      }
    )
    .then(res => {
        if (res.status !== 200) {
            return Promise.reject(res.statusText);
        }
        return Promise.resolve(res.data);
    }).then(acronyms => {
        dispatch(fetchAcronymsSuccess(acronyms));
    }).catch(err => {
        console.log(err);
    });
};
export const postAcronym= (acronymData) => (dispatch, getState) => {
    dispatch(dataLoading());
    const authToken = getState().auth.authToken;
    const postData = qs.stringify(acronymData);
    axios.post(ACRONYMS_URL, postData, {
        headers: { Authorization: `Bearer ${authToken}` }
      }
    )
    .then(res => {
        if (res.status !== 201) {
            return Promise.reject(res.statusText);
        }
        return Promise.resolve(res.data);
    }).then(acronymConfirmation => {
        dispatch(addUpdateAcronymSuccess(acronymConfirmation));
    }).catch(err => {
        console.log(err);
    });
};
export const putAcronym= (acronymData) => (dispatch, getState) => {
    dispatch(dataLoading());
    const authToken = getState().auth.authToken;
    const putData = qs.stringify(acronymData);
    axios.put(ACRONYMS_URL+'/'+acronymData.id, putData, {
        headers: { Authorization: `Bearer ${authToken}` }
      }
    )
    .then(res => {
        if (res.status !== 200) {
            return Promise.reject(res.statusText);
        }
        return Promise.resolve(res.data);
    }).then(acronymConfirmation => {
        dispatch(addUpdateAcronymSuccess(acronymConfirmation));
    }).catch(err => {
        console.log(err);
    });
};
export const deleteAcronym= (acronymId) => (dispatch, getState) => {
    dispatch(dataLoading());
    const authToken = getState().auth.authToken;
    axios.delete(ACRONYMS_URL+'/'+acronymId, {
        headers: { Authorization: `Bearer ${authToken}` }
      }
    )
    .then(res => {
        if (res.status !== 204) {
            return Promise.reject(res.statusText);
        }
        return Promise.resolve();
    }).then(() => {
        dispatch(addUpdateAcronymSuccess('Acronym was deleted!'));
    }).catch(err => {
        console.log(err);
    });
};

export const FETCH_ACRONYMS_SUCCESS = 'FETCH_ACRONYMS_SUCCESS';
export const fetchAcronymsSuccess = acronyms => ({
    type: FETCH_ACRONYMS_SUCCESS,
    acronyms
});

export const ADD_UPDATE_ACRONYM_SUCCESS = 'ADD_UPDATE_ACRONYM_SUCCESS';
export const addUpdateAcronymSuccess = acronymConfirmation => ({
    type: ADD_UPDATE_ACRONYM_SUCCESS,
    acronymConfirmation
});

export const DISMISS_ACRONYM_SUCCESS = 'DISMISS_ACRONYM_SUCCESS';
export const dismissAcronymSuccess = () => ({
    type: DISMISS_ACRONYM_SUCCESS
});

export const DATA_LOADING = 'DATA_LOADING';
export const dataLoading = () => ({
    type: DATA_LOADING
});

export const SET_FINDER_VAL = 'SET_FINDER_VAL';
export const setFinderVal = finderVal => ({
    type: SET_FINDER_VAL,
    finderVal
});

export const SET_FINDER_RESULTS = 'SET_FINDER_RESULTS';
export const setFinderResults = finderResults => ({
    type: SET_FINDER_RESULTS,
    finderResults
});

export const SET_ADD_VAL = 'SET_ADD_VAL';
export const setAddVal = addVal => ({
    type: SET_ADD_VAL,
    addVal
});

export const SET_EDITING = 'SET_EDITING';
export const setEditing = editing => ({
    type: SET_EDITING,
    editing
});

export const SET_CHANGES_ID = 'SET_CHANGES_ID';
export const setChangesId = changesId => ({
    type: SET_CHANGES_ID,
    changesId
});

export const SET_ACRONYM_CHANGES_VAL = 'SET_ACRONYM_CHANGES_VAL';
export const setAcronymChangesVal = acronymChangesVal => ({
    type: SET_ACRONYM_CHANGES_VAL,
    acronymChangesVal
});

export const SET_DEFINITION_CHANGES_VAL = 'SET_DEFINITION_CHANGES_VAL';
export const setDefinitionChangesVal = definitionChangesVal => ({
    type: SET_DEFINITION_CHANGES_VAL,
    definitionChangesVal
});
