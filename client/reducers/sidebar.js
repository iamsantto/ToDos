import { handleActions } from 'redux-actions'

import types from '../constants/actionTypes'

const reducers = {}
const initialState = {
  tabValue: 'categories'
}

reducers[types.TOGGLE_TABS] = (state, action) => {
  return Object.assign({}, state, { tabValue: action.payload.value })
}

export default handleActions(reducers, initialState)
