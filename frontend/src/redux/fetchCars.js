import {fetchCarsPending, fetchCarsSuccess, fetchCarsError} from './actions';

function fetchCars() {
    return dispatch => {
        dispatch(fetchCarsPending());
        fetch('http://localhost:8080/cars')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCarsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchCarsError(error));
        })
    }
}

export default fetchCars;