import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

import { Categories, Labels } from './'

const Groups = props => {

  return (
    <Tabs className="tab-header content" value={props.tabValue} onChange={props.handleChange}>
      <Tab label="categories" value="categories">
        <Categories todoPanel={props.todoPanel} actions={props.actions} showModal={props.showModal} categories={props.categories} labels={props.labels} />
      </Tab>
      <Tab label="labels" value="labels">
        <Labels todoPanel={props.todoPanel} actions={props.actions} showModal={props.showModal} labels={props.labels} categories={props.categories} />
      </Tab>
    </Tabs>
  )
}

export default Groups
