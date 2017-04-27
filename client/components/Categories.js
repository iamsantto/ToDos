import React from 'react'
import { List, ListItem } from 'material-ui/List'

import { AddNew } from './'

const Categories = props => {
  const categoriesList = props.categories.map(category =>
    <ListItem key={category.name} primaryText={category.name} leftIcon={<i className="material-icons">bookmark</i>} initiallyOpen={false} primaryTogglesNestedList={true}
      nestedItems={ category.todos.map(todo =>
        <ListItem key={todo} primaryText={todo} leftIcon={<i className="material-icons">note</i>} />) }
    />
  )

  return (
    <div>
      <List>
        <div className="row small-top-pad">
          <AddNew actions={props.actions} showModal={props.showModal} className="pull-right" type="Category" />
        </div>
        <div className="content">
          {categoriesList}
        </div>
      </List>
    </div>
  )
}

export default Categories
