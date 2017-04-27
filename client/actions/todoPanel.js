import types from '../constants/actionTypes'

const toggleTitle = value => {
  return {
    type: types.TOGGLE_TITLE,
    payload: {
      value
    }
  }
}

export default { toggleTitle }
