import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

import { AddNew } from './'

const MainPanel = props => {
  let lists

  const { todoPanel } = props

  let toggleCheckbox = (isChecked, listId, taskId) => {
    props.actions.toggleCompleteTask({isChecked, listId, taskId})
  }

  lists = todoPanel.lists.map((list, index) => {
    let formatedDeadline = new Date(list.deadline).toDateString()

    return <div key={index} className="content">
      <Card>
        <CardHeader
          className="card-header-todo"
          title={list.title}
          subtitle={
            <div>
              <FlatButton label={formatedDeadline} primary={true} icon={<i className="material-icons">today</i>} disabled={true} />
              {list.labels.map((label, index) =>
                <FlatButton key={index} label={label} primary={true} icon={<i className="material-icons">label_outline</i>} disabled={true} />
              )}
            </div>
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <List>
            {list.tasks.map((task, index) =>
                <ListItem
                  className="list-item-todo"
                  leftCheckbox={<Checkbox onClick={e => toggleCheckbox(e.target.checked, list.id, task.id)} checked={task.completed} />}
                  primaryText={<span className={task.completed ? "task-striked" : ""}>{task.value}</span>}
                  key={index}
                />
            )}
          </List>
        </CardText>
      </Card>
    </div>
  })

  return (
    <div className="col-md-9 main-panel">
      <div className="row content">
        <div className="col-md-8">
          <h3 className="">{props.todoPanel.title}</h3>
        </div>
        <div className="col-md-4 med-top-pad">
          <AddNew labels={props.labels} categories={props.categories} todoPanel={todoPanel} actions={props.actions} showModal={props.showModal} className="pull-right" type="To-Do" />
        </div>
      </div>
      <div className="content row">
        {lists}
      </div>
    </div>
  )
}

export default MainPanel
