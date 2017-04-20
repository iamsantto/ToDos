import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Categories, Labels } from './'

const Sidebar = props => {
  return (
    <div className="sidebar col-md-3">
      <div className="content">
        <Tabs className="tab-header" value={props.tabValue} onChange={props.handleChange}>
          <Tab label="categories" value="categories">
            <Categories />
          </Tab>
          <Tab label="labels" value="labels">
            <Labels />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Sidebar
