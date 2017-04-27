import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const Deadlines = props => {
  const today = "Today"
  const nextSeven = "Next 7 Days"
  const month = "This Month"
  const all = "All"

  const handleClick = value => {
    props.actions.toggleTitle(value)
  }

  return (
    <div>
      <List>
        <ListItem primaryText={today} onClick={()=>handleClick(today)} leftIcon={<i className="material-icons">priority_high</i>} />
        <ListItem primaryText={nextSeven} onClick={()=>handleClick(nextSeven)} leftIcon={<i className="material-icons">filter_7</i>} />
        <ListItem primaryText={month} onClick={()=>handleClick(month)} leftIcon={<i className="material-icons">insert_invitation</i>} />
        <ListItem primaryText={all} onClick={()=>handleClick(all)} leftIcon={<i className="material-icons">layers</i>} />
      </List>
      <Divider />
    </div>
  )
}

export default Deadlines
