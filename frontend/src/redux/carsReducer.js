import {FETCH_CARS_PENDING, FETCH_CARS_SUCCESS, FETCH_CARS_ERROR, ADD_CAR_TO_CART, REMOVE_CAR_FROM_CART} from './actions'

const initialState = {
    cars: [],
    addedItems: [],
    totalPrice: 0
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
            let existed_item = state.addedItems.find(item => action.car.id === item.id)
            if (!existed_item) {
                let newPrice = state.totalPrice + action.car.price;
                return {
                    ...state,
                    addedItems: [...state.addedItems, action.car],
                    totalPrice: newPrice
                }
            } else {
                return {
                    ...state
                }
            }

        case REMOVE_CAR_FROM_CART:
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.car.id !== item.id)
            let newTotal = state.totalPrice - action.car.price;
            console.log(itemToRemove);
            return {
                ...state,
                pending: false,
                addedItems: [...new_items],
                totalPrice: newTotal
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
