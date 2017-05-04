import rp from 'request-promise'

import types from '../constants/actionTypes'

const toggleTitle = value => {
  return {
    type: types.TOGGLE_TITLE,
    payload: {
      value
    }
  }
}

const hideSnackbar = () => {
  return {
    type: types.HIDE_SNACKBAR,
    payload: {}
  }
}

const saveTodoList = body => {
  let options = {
    method: 'POST',
    uri: 'api/todolist/save',
    body,
    json: true
  }

  return dispatch => {
    return rp(options)
      .then(response => {
        dispatch(saveTodoSuccess())
      })
      .catch(err => {
        dispatch(saveTodoFailure())
      })
  }
}

const saveTodoSuccess = () => {
  return {
    type: types.SAVE_TODO_SUCCESS,
    payload: {}
  }
}

const saveTodoFailure = () => {
  return {
    type: types.SAVE_TODO_FAILURE,
    payload: {}
  }
}

const addTaskToState = task => {
  return {
    type: types.ADD_TASK_TO_STATE,
    payload: {
      task
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

const showTodoAdder = () => {
  return {
    type: types.SHOW_TO_DO_ADDER,
    payload: {}
  }
}

const hideTagging = () => {
  return {
    type: types.HIDE_TAGGING,
    payload: {}
  }
}

const hideToDoAdder = () => {
  return {
    type: types.HIDE_TO_DO_ADDER,
    payload: {}
  }
}

const clearValues = () => {
  return {
    type: types.CLEAR_VALUES,
    payload: {}
  }
}

export default { addTaskToState, clearValues, toggleTitle, tagLabel, unTagLabel, showTagging, hideTagging, hideToDoAdder, showTodoAdder, saveTodoList, hideSnackbar }
