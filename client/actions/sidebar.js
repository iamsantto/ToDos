import types from '../constants/actionTypes'

const toggleTabs = (value) => {
  return {
    type: types.TOGGLE_TABS,
    payload: {
      value
    }
  }
}

export default { toggleTabs }
