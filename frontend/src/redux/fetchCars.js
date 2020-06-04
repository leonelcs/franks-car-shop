import {fetchCarsPending, fetchCarsSuccess, fetchCarsError} from './actions';

function fetchCars() {
    return dispatch => {
        dispatch(fetchCarsPending());
        return fetch('http://localhost:8080/cars?field=dateAdded&direction=asc')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCarsSuccess(res));
        })
        .catch(error => {
            dispatch(fetchCarsError(error));
        })
    }
}

export default fetchCars;