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

const getTodoLists = (criteria) => {
  const lists = [
    {
      id: 1,
      title: "Random Important To-Do List",
      isCompleted: false,
      labels: ['Priority', 'Production'],
      category: 'Project A',
      tasks: [{ id: 0, value: "This is the first step", completed: false }, { id: 1, value: "Second step", completed: false }, { id: 2, value: "Really really really long step which is super important and takes time to do without which this to-do list is meaningless, i hope its long enough", completed: false }, { id: 3, value: "finishing touches", completed: false}],
      deadline: '2017-05-17T18:30:00.000Z'
    },
    {
      id: 2,
      title: "Random Normal To-Do List",
      isCompleted: true,
      labels: ['Staging'],
      category: 'Project B',
      tasks: [{ id: 0, value: "This is the first step", completed: true }, { id: 1, value: "Second step", completed: false }, { id: 2, value: "Really really really long step which is super important and takes time to do without which this to-do list is meaningless, i hope its long enough", completed: true }, { id: 3, value: "finishing touches", completed: false }],
      deadline: '2017-05-17T18:30:00.000Z'
    }
  ]

  return {
    type: types.GET_TODO_LISTS_FINISH,
    payload: {
      lists
    }
  }
}

const completeTaskHandler = data => {
  return dispatch => {
    dispatch(toggleCompleteTask(data))
    // dispatch(updateDB(data))
  }
}

const toggleCompleteTask = data => {
  return {
    type: types.TOGGLE_COMPLETE_TASK,
    payload: data
  }
}

// const updateDB = data => {

// }

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

const toggleDeleteDialog = (show, list) => {
  return {
    type: types.TOGGLE_DELETE_DIALOG,
    payload: {
      show,
      list
    }
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

export default { addTaskToState, clearValues, toggleTitle, completeTaskHandler, tagLabel, toggleDeleteDialog, unTagLabel, showTagging, hideTagging, hideToDoAdder, showTodoAdder, saveTodoList, hideSnackbar, getTodoLists }
