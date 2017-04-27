import types from '../constants/actionTypes'

const toggleTitle = value => {
  return {
    type: types.TOGGLE_TITLE,
    payload: {
      value
    }
  }
}

const tagLabel = label => {
  return {
    type: types.TAG_LABEL,
    payload: {
      label
    }
  }
}

const unTagLabel = label => {
  return {
    type: types.UNTAG_LABEL,
    payload: {
      label
    }
  }
}

const showTagging = () => {
  return {
    type: types.SHOW_TAGGING,
    payload: {}
  }
}

const hideTagging = () => {
  return {
    type: types.HIDE_TAGGING,
    payload: {}
  }
}

const clearValues = () => {
  return {
    type: types.CLEAR_LABELS,
    payload: {}
  }
}

export default { clearValues, toggleTitle, tagLabel, unTagLabel, showTagging, hideTagging }
