import types from '../constants/actionTypes'

const getCategories = (userId) => {
  const categories = [
    {
      name: 'Project A',
      todos: ['Deploy Server', 'Testing']
    }, {
      name: 'Project B',
      todos: ['Set Up', 'Designs']
    }
  ]

  return {
    type: types.CATEGORIES_INIT,
    payload: {
      categories
    }
  }
}

const getLabels = (userId) => {
  const labels = ['Label A', 'Label B', 'Label C']

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
