import { handleActions } from 'redux-actions'

import types from '../constants/actionTypes'

const reducers = {}
const initialState = {
  tabValue: 'categories',
  categories: [],
  labels: [],
  showModal: {
    addCategory: false,
    addLabel: false,
    addToDoList: false
  }
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

reducers[types.SHOW_ADD_MODAL] = (state, action) => {
  if (action.payload.value === 'Category')
    return Object.assign({}, state, { showModal: { addCategory: true, addLabel: false, addToDoList: false } })
  if (action.payload.value === 'Label')
    return Object.assign({}, state, { showModal: { addCategory: false, addLabel: true, addToDoList: false } })
  if (action.payload.value === 'To-Do')
    return Object.assign({}, state, { showModal: { addCategory: false, addLabel: false, addToDoList: true } })
}

reducers[types.HIDE_ADD_MODAL] = (state, action) => {
  return Object.assign({}, state, { showModal: false })
}

export default handleActions(reducers, initialState)
