import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Header, Sidebar, MainPanel } from '../components'
import { sidebarActions, todoPanelActions } from '../actions'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.getCategories(1)
    this.props.actions.getLabels(1)
  }

  render() {
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

    return (
      <div>
        <Header title="Dashboard" menuItems={menu}/>
        <div className="row">
          <Sidebar actions={this.props.actions} showModal={sidebar.showModal} tabValue={sidebar.tabValue} handleChange={handleChange} labels={sidebar.labels} categories={sidebar.categories} />
          <MainPanel actions={this.props.actions} showModal={sidebar.showModal} title={todoPanel.title} />
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
