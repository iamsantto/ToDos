import { handleActions } from 'redux-actions'

import types from '../constants/actionTypes'

const reducers = {}
const initialState = {
  tabValue: 'categories',
  categories: [],
  labels: []
}

reducers[types.TOGGLE_TABS] = (state, action) => {
  return Object.assign({}, state, { tabValue: action.payload.value })
}

reducers[types.CATEGORIES_INIT] = (state, action) => {
  return Object.assign({}, state, { categories: action.payload.categories })
}

reducers[types.LABELS_INIT] = (state, action) => {
  return Object.assign({}, state, { labels: action.payload.labels })
}

export default handleActions(reducers, initialState)
