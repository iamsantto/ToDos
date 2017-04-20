const actionTypes = {};

[
  //Sidebar Actions
  'TOGGLE_TABS'
].forEach(action => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
