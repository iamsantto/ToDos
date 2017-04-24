import React from 'react'
import { List, ListItem } from 'material-ui/List'

const Labels = props => {
  let labelsList = props.labels.map(label =>
    <ListItem key={label} primaryText={label} leftIcon={<i className="material-icons">label</i>} />
  )

  return (
    <div className="content">
      <List>
        {labelsList}
      </List>
    </div>
  )
}

export default Labels
