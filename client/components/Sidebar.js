import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

const Sidebar = props => {
  return (
    <div className="sidebar col-md-3">
      <div className="content">
        <Tabs value={props.tabValue} onChange={props.handleChange}>
          <Tab label="categories" value="categories">
            <div>
              <h2>Category</h2>
            </div>
          </Tab>
          <Tab label="labels" value="labels">
            <div>
              <h2>Labels</h2>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Sidebar
