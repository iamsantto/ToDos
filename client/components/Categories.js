import React from 'react'
import { List, ListItem } from 'material-ui/List'

const Categories = props => {
  const categoriesList = props.categories.map(category =>
    <ListItem key={category.name} primaryText={category.name} leftIcon={<i className="material-icons">bookmark</i>} initiallyOpen={false} primaryTogglesNestedList={true}
      nestedItems={ category.todos.map(todo =>
        <ListItem key={todo} primaryText={todo} leftIcon={<i className="material-icons">note</i>} />) }
    />
  )

  return (
    <div className="content">
      <List>
        {categoriesList}
      </List>
    </div>
  )
}

export default Categories
