import {FETCH_CARS_PENDING, FETCH_CARS_SUCCESS, FETCH_CARS_ERROR, ADD_CAR_TO_CART, REMOVE_CAR_FROM_CART} from './actions'

const initialState = {
    cars: [],
    addedItems: [],
    totalPrice: []
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
        case ADD_CAR_TO_CART: 
            return {
                ...state,
                addedItems: [...state.addedItems, action.car],
            }
        case REMOVE_CAR_FROM_CART:
            return {
                ...state,
                pending: false,
                addedItems: [...state.addedItems] //it is not removing yet
            }
        default:
            return state;
    }
}


export const getCars = state => state.cars;
export const getCarsPending = state => state.pending;
export const getCarsError = state => state.error;
export const getCartItems = state => state.addedItems;
export const getTotalPrice = state => state.addedItems;
