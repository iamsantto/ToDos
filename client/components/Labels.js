import React from 'react'
import { List, ListItem } from 'material-ui/List'

import { AddNew } from './'

const Labels = props => {
  const handleClick = value => {
    props.actions.toggleTitle(value)
  }

  let labelsList = props.labels.map(label =>
    <ListItem key={label} primaryText={label} onClick={()=>handleClick(label)} leftIcon={<i className="material-icons">label</i>} />
  )

  return (
    <div>
      <List>
        <div className="row small-top-pad">
          <AddNew actions={props.actions} showModal={props.showModal} className="pull-right" type="Label" />
        </div>
        <div className="content">
          {labelsList}
        </div>
      </List>
    </div>
  )
}

export default Labels
