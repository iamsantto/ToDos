import React from 'react'
import { Deadlines, Groups } from './'

const Sidebar = props => {
  return (
    <div className="sidebar col-md-3">
      <div className="content">
        <Deadlines actions={props.actions} />
        <Groups todoPanel={props.todoPanel} actions={props.actions} showModal={props.showModal} tabValue={props.tabValue} handleChange={props.handleChange} labels={props.labels} categories={props.categories} />
      </div>
    </div>
  )
}

export default Sidebar
