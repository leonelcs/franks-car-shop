import { carsReducer } from './carsReducer';
import { ADD_CAR_TO_CART, REMOVE_CAR_FROM_CART } from './actions';
import { car } from './mock';

const state = {
    cars: [],
    addedItems: [],
    totalPrice: 0
  }

describe('cars reducer', () => {
  it('should return the initial state', () => {
    expect(carsReducer(undefined, {})).toEqual(
      {
        cars: [],
        addedItems: [],
        totalPrice: 0
      }
    )
  })

  it('should return addedItems with the new value', () => {
    expect(carsReducer(state, {
        type: ADD_CAR_TO_CART,
        car: car

    })).toEqual(
      {
        cars: [],
        addedItems: [car],
        totalPrice: car.price
      }
    )
  })

  const stateBeforeRemoval = {
    cars: [],
    addedItems: [car],
    totalPrice: car.price,
    pending: false
  }

  it('should return addedItems with the value remove', () => {
    expect(carsReducer(stateBeforeRemoval, {
        type: REMOVE_CAR_FROM_CART,
        car: car

    })).toEqual(
      {
        cars: [],
        addedItems: [],
        totalPrice: 0,
        pending: false
      }
    )
  })
})
