import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { reducers } from './reducers'

const routeMiddleware = routerMiddleware(browserHistory)

let configureStore = (initialState = {}) => {
  const store = compose(
    applyMiddleware(
      routeMiddleware,
      thunk
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(reducers, initialState)

  return store
}

export { configureStore }
