import {FETCH_CARS_PENDING, FETCH_CARS_SUCCESS, FETCH_CARS_ERROR} from './actions'

const initialState = {
    cars: [],
}

export function carsReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_CARS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_CARS_SUCCESS:
            return {
                ...state,
                pending: false,
                cars: action.cars
            }
        case FETCH_CARS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getCars = state => state.cars;
export const getCarsPending = state => state.pending;
export const getCarsError = state => state.error;