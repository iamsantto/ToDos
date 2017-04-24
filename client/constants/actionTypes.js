const actionTypes = {};

[
  //Sidebar Actions
  'TOGGLE_TABS',
  'CATEGORIES_INIT',
  'LABELS_INIT'
].forEach(action => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
