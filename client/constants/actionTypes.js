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
  'DONE_TAGGING',
  'HIDE_TAGGING',
  'CLEAR_LABELS'
].forEach(action => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
