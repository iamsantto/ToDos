const actionTypes = {};

[
  //Sidebar Actions
  'TOGGLE_TABS',
  'CATEGORIES_INIT',
  'LABELS_INIT',
  'SHOW_ADD_MODAL',
  'HIDE_ADD_MODAL',

  //ToDoPanel Actions
  'TOGGLE_TITLE',
  'TAG_LABEL',
  'UNTAG_LABEL',
  'SHOW_TAGGING',
  'HIDE_TAGGING',
  'CLEAR_VALUES',
  'SHOW_TO_DO_ADDER',
  'HIDE_TO_DO_ADDER',
  'ADD_TASK_TO_STATE',
  'SAVE_TODO_SUCCESS',
  'SAVE_TODO_FAILURE',
  'HIDE_SNACKBAR',
  'GET_TODO_LISTS_FINISH',
  'TOGGLE_COMPLETE_TASK'
].forEach(action => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
