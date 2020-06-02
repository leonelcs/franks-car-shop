import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'; 
import './index.css';
import App from './App.js';
import {createStore} from 'redux';
import { carsReducer } from './redux/carsReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


import * as serviceWorker from './serviceWorker';
import { applyMiddleware } from 'redux';

const middlewares = [thunk];

const store = createStore(carsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
