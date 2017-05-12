import types from '../constants/actionTypes'

const getCategories = () => {
  const categories = [
    {
      name: 'Project A',
      id: 0
    }, {
      name: 'Project B',
      id: 1
    }
  ]

  return {
    type: types.CATEGORIES_INIT,
    payload: {
      categories
    }
  }
}

const getLabels = () => {
  const labels = [{ name: 'Label A', id: 0 }, { name: 'Label B', id: 1 }, { name: 'Label C', id: 2 }]

  return {
    type: types.LABELS_INIT,
    payload: {
      labels
    }
  }
}

const showAddModal = (value) => {
  return {
    type: types.SHOW_ADD_MODAL,
    payload: {
      value
    }
  }
}

const hideAddModal = () => {
  return {
    type: types.HIDE_ADD_MODAL,
    payload: {}
  }
}

const toggleTabs = (value) => {
  return {
    type: types.TOGGLE_TABS,
    payload: {
      value
    }
  }
}

export default { getCategories, getLabels, toggleTabs, showAddModal, hideAddModal }
