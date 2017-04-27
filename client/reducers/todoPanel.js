import { handleActions } from 'redux-actions'

import types from '../constants/actionTypes'

const reducers = {}
const initialState = {
  title: 'Welcome'
}

reducers[types.TOGGLE_TITLE] = (state, action) => {
  return Object.assign({}, state, { title: action.payload.value })
}

export default handleActions(reducers, initialState)
