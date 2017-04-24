import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

import { Categories, Labels } from './'

const Groups = props => {

  return (
    <Tabs className="tab-header content" value={props.tabValue} onChange={props.handleChange}>
      <Tab label="categories" value="categories">
        <Categories categories={props.categories} />
      </Tab>
      <Tab label="labels" value="labels">
        <Labels labels={props.labels} />
      </Tab>
    </Tabs>
  )
}

export default Groups
