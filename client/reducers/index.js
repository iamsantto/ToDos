import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import sidebar from './sidebar'

const appReducer = combineReducers({
  sidebar
})

const reducers = combineReducers({
  app: appReducer,
  routing: routerReducer,
  form: formReducer
})

export { reducers }
