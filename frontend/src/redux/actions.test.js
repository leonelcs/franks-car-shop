import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mock from './mock';
import {FETCH_CARS_PENDING, FETCH_CARS_SUCCESS} from './actions'
import fetchCars from './fetchCars';
// import * as types from '../../constants/ActionTypes'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_CARS_SUCCESS when fetching cars has been done', () => {
    fetchMock.getOnce('http://localhost:8080/cars?field=dateAdded&direction=asc', {
        body: [...mock],
        headers: { 'Content-Type': 'application/json' }
    })

    const expectedActions = [
      { type: FETCH_CARS_PENDING },
      { type: FETCH_CARS_SUCCESS, cars: [...mock] }
    ]

    const store = mockStore(
        {
            cars: []
        })
    // console.log(store.dispatch(fetchCars()));

    return store.dispatch(fetchCars()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})