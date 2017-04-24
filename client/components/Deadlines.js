import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const Deadlines = props => {
  return (
    <div>
      <List>
        <ListItem primaryText="Today" leftIcon={<i className="material-icons">priority_high</i>} />
        <ListItem primaryText="Next 7 Days" leftIcon={<i className="material-icons">filter_7</i>} />
        <ListItem primaryText="This Month" leftIcon={<i className="material-icons">insert_invitation</i>} />
        <ListItem primaryText="All" leftIcon={<i className="material-icons">layers</i>} />
      </List>
      <Divider />
    </div>
  )
}

export default Deadlines
