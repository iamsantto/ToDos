import { handleActions } from 'redux-actions'
import _ from 'lodash'

import types from '../constants/actionTypes'

const reducers = {}
const initialState = {
  title: 'Everything',
  create: {
    labels: [],
    tasks: []
  },
  snackbar: {
    show: false,
    message: ''
  },
  lists: []
}

reducers[types.TOGGLE_TITLE] = (state, action) => {
  return Object.assign({}, state, { title: action.payload.value })
}

reducers[types.GET_TODO_LISTS_FINISH] = (state, action) => {
  return Object.assign({}, state, { lists: action.payload.lists })
}

reducers[types.UNTAG_LABEL] = {
  next(state, action) {
    let newLabels = state.create.labels.filter(label => label !== action.payload.label)
    let newTasks = state.create.tasks

    return Object.assign({}, state, { create: { labels: newLabels, tasks: newTasks } })
  }
}

reducers[types.SHOW_TAGGING] = (state, action) => {
  return Object.assign({}, state, { showTagging: true })
}

reducers[types.TOGGLE_DELETE_DIALOG] = (state, action) => {
  if (action.payload.show)
    return Object.assign({}, state, { deleteDialog: { show: action.payload.show, list: action.payload.list } })
  else
    return Object.assign({}, state, { deleteDialog: { show: action.payload.show } })
}

reducers[types.TOGGLE_COMPLETE_TASK] = (state, action) => {
  let newLists = []

  state.lists.map(list => {
    if (list.id === action.payload.listId) {
      let newTasks = []

      list.tasks.map(task => {
        if (task.id === action.payload.taskId)
          if (action.payload.isChecked)
            newTasks.push(Object.assign({}, task, { completed: true }))
          else
            newTasks.push(Object.assign({}, task, { completed: false }))
        else
          newTasks.push(task)
      })
      newLists.push(Object.assign({}, list, { tasks: newTasks }))
    } else {
      newLists.push(list)
    }
  })

  return Object.assign({}, state, { lists: newLists })
}

reducers[types.SHOW_TO_DO_ADDER] = (state, action) => {
  return Object.assign({}, state, { showTodoAdder: true })
}

reducers[types.HIDE_TAGGING] = (state, action) => {
  return Object.assign({}, state, { showTagging: false })
}

reducers[types.HIDE_TO_DO_ADDER] = (state, action) => {
  return Object.assign({}, state, { showTodoAdder: false })
}

reducers[types.SAVE_TODO_SUCCESS] = (state, action) => {
  return Object.assign({}, state, { snackbar: { show: true, message: 'Your To-Do was successfully saved.' } })
}

reducers[types.SAVE_TODO_FAILURE] = (state, action) => {
  return Object.assign({}, state, { snackbar: { show: true, message: 'Failed to save. Try Again.' } })
}

reducers[types.HIDE_SNACKBAR] = (state, action) => {
  return Object.assign({}, state, { snackbar: { show: false }})
}

reducers[types.TAG_LABEL] = {
  next(state, action) {
    let newLabels = _.concat(state.create.labels, action.payload.label)
    let newTasks = state.create.tasks

    return Object.assign({}, state, { create: { labels: newLabels, tasks: newTasks } })
  }
}

reducers[types.ADD_TASK_TO_STATE] = {
  next(state, action) {
    let newLabels = state.create.labels
    let newTasks = _.concat(state.create.tasks, action.payload.task)

    return Object.assign({}, state, { create: { labels: newLabels, tasks: newTasks } })
  }
}

reducers[types.CLEAR_VALUES] = (state, action) => {
  return Object.assign({}, state, { create: { labels: [], tasks: [] } })
}

export default handleActions(reducers, initialState)
