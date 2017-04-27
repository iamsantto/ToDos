const actionTypes = {};

[
  //Sidebar Actions
  'TOGGLE_TABS',
  'CATEGORIES_INIT',
  'LABELS_INIT',
  'SHOW_ADD_MODAL',
  'HIDE_ADD_MODAL',

  //ToDoPanel Actions
  'TOGGLE_TITLE'
].forEach(action => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
