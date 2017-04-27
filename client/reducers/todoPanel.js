import { handleActions } from 'redux-actions'
import _ from 'lodash'

import types from '../constants/actionTypes'

const reducers = {}
const initialState = {
  title: 'Today',
  create: {
    labels: []
  }
}

reducers[types.TOGGLE_TITLE] = (state, action) => {
  return Object.assign({}, state, { title: action.payload.value })
}

reducers[types.UNTAG_LABEL] = {
  next(state, action) {
    let newLabels = state.create.labels.filter(label => label !== action.payload.label)

    return Object.assign({}, state, { create: { labels: newLabels } })
  }
}

reducers[types.SHOW_TAGGING] = (state, action) => {
  return Object.assign({}, state, { showTagging: true })
}

reducers[types.HIDE_TAGGING] = (state, action) => {
  return Object.assign({}, state, { showTagging: false })
}

reducers[types.TAG_LABEL] = {
  next(state, action) {
    let newLabels = _.concat(state.create.labels, action.payload.label)

    return Object.assign({}, state, { create: { labels: newLabels } })
  }
}

reducers[types.CLEAR_LABELS] = (state, action) => {
  return Object.assign({}, state, { create: { labels: [] } })
}

export default handleActions(reducers, initialState)
