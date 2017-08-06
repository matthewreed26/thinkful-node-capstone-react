import axios from 'axios';
import qs from 'qs';
const BASE_URL = ( "http://localhost:8080");
//const BASE_URL = ( "https://polar-lake-31524.herokuapp.com");
const ACRONYMS_URL = BASE_URL + '/acronyms';
export const fetchAcronyms= () => dispatch => {
    axios.get(ACRONYMS_URL)
    .then(res => {
        if (res.status !== 200) {
            return Promise.reject(res.statusText);
        }
        return res.data;
    }).then(acronyms => {
        dispatch(fetchAcronymsSuccess(acronyms));
    }).catch(err => {
        console.log(err);
    });
};
export const postAcronym= (acronymData) => dispatch => {
    const postData = qs.stringify(acronymData);
    axios.post(ACRONYMS_URL, postData)
    .then(res => {console.log(res);
        if (res.status !== 201) {
            return Promise.reject(res.statusText);
        }
        return res.data;
    }).then(acronymConfirmation => {
        dispatch(addUpdateAcronymSuccess(acronymConfirmation));
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
