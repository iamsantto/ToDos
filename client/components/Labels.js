import React from 'react'
import { List, ListItem } from 'material-ui/List'

import { AddNew } from './'

const Labels = props => {
  const handleClick = label => {
    props.actions.toggleTitle(label.name)
    props.actions.getTodoLists({ label: label.id })
  }

  let labelsList = props.labels.map(label =>
    <ListItem key={label.id} primaryText={label.name} onClick={()=>handleClick(label)} leftIcon={<i className="material-icons">label</i>} />
  )

  return (
    <div>
      <List>
        <div className="row small-top-pad">
          <AddNew categories={props.categories} labels={props.labels} todoPanel={props.todoPanel} actions={props.actions} showModal={props.showModal} className="pull-right" type="Label" />
        </div>
        <div className="content">
          {labelsList}
        </div>
      </List>
    </div>
  )
}

export default Labels
