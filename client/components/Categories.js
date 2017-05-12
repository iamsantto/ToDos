import React from 'react'
import { List, ListItem } from 'material-ui/List'

import { AddNew } from './'

const Categories = props => {
  const handleOnClick = category => {
    props.actions.toggleTitle(category.name)
    props.actions.getTodoLists({ category: category.id })
  }

  const categoriesList = props.categories.map(category =>
    <ListItem key={category.id} onClick={() => handleOnClick(category)} primaryText={category.name} leftIcon={<i className="material-icons">bookmark</i>} />
  )

  return (
    <div>
      <List>
        <div className="row small-top-pad">
          <AddNew categories={props.categories} labels={props.labels} todoPanel={props.todoPanel} actions={props.actions} showModal={props.showModal} className="pull-right" type="Category" />
        </div>
        <div className="content">
          {categoriesList}
        </div>
      </List>
    </div>
  )
}

export default Categories
