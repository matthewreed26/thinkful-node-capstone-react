export const FETCH_ACRONYMS_SUCCESS = 'FETCH_ACRONYMS_SUCCESS';
export const fetchAcronymsSuccess = acronyms => ({
    type: FETCH_ACRONYMS_SUCCESS,
    acronyms
});

export const fetchAcronyms= () => dispatch => {
    fetch('/acronyms').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(acronyms => {
        dispatch(fetchAcronymsSuccess(acronyms));
    });
};
