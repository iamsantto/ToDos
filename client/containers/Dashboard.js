import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'

import { Header, Sidebar, MainPanel } from '../components'
import { sidebarActions, todoPanelActions } from '../actions'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.getCategories()
    this.props.actions.getLabels()
    this.props.actions.getTodoLists()
  }

  render() {
    let snackbar

    const menu = [{
      option: 'Settings',
      onClick: () => { window.alert("Settings") }
    }, {
      option: 'Sign Out',
      onClick: () => { window.alert("Sing out") }
    }]

    const handleChange = value => {
      this.props.actions.toggleTabs(value)
    }

    const { sidebar, todoPanel } = this.props

    if (todoPanel.snackbar.show)
      snackbar = <Snackbar open={todoPanel.snackbar.show} message={todoPanel.snackbar.message} autoHideDuration={4000} onRequestClose={this.props.actions.hideSnackbar} />

    return (
      <div>
        <Header title="Dashboard" menuItems={menu}/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar todoPanel={todoPanel} actions={this.props.actions} showModal={sidebar.showModal} tabValue={sidebar.tabValue} handleChange={handleChange} labels={sidebar.labels} categories={sidebar.categories} />
            <MainPanel labels={sidebar.labels} categories={sidebar.categories} todoPanel={todoPanel} actions={this.props.actions} showModal={sidebar.showModal} />
            {snackbar}
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    dashboard: state.app.dashboard,
    sidebar: state.app.sidebar,
    todoPanel: state.app.todoPanel
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({},
      sidebarActions,
      todoPanelActions
      ), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
