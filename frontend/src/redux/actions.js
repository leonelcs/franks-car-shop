

// actions.js
export const FETCH_CARS_PENDING = 'FETCH_CARS_PENDING';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';


export function fetchCarsPending() {
    return {
        type: FETCH_CARS_PENDING
    }
}

export function fetchCarsSuccess(cars) {
    return {
        type: FETCH_CARS_SUCCESS,
        cars: cars
    }
}

export function fetchCarsError(error) {
    return {
        type: FETCH_CARS_ERROR,
        error: error
    }
}
