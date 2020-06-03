

// actions.js
export const FETCH_CARS_PENDING = 'FETCH_CARS_PENDING';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';
export const ADD_CAR_TO_CART = 'ADD_CAR_TO_CART';
export const REMOVE_CAR_FROM_CART = 'REMOVE_CAR_FROM_CART';


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

export function addCarToCart(car) {
    return {
        type: ADD_CAR_TO_CART,
        car: car
    }
}

export function removeCarFromCart(car) {
    return {
        type: REMOVE_CAR_FROM_CART,
        car: car
    }
}
