import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'

import { AddNew } from './'

const MainPanel = props => {
  let lists
  let displayDialog

  const { todoPanel } = props

  const toggleCheckbox = (isChecked, listId, taskId) => {
    props.actions.completeTaskHandler({isChecked, listId, taskId})
  }

  const handleDeleteList = list => {
    props.actions.toggleDeleteDialog(true, list)
  }

  const deleteActions = [
    <FlatButton label="Cancel" primary={true} onTouchTap={() => handleDelete(false)} keyboardFocused={true} />,
    <FlatButton label="Delete" secondary={true} onTouchTap={() => handleDelete(true, todoPanel.deleteDialog.list)} />
  ]

  const handleDelete = (performDelete, list = {}) => {
    if (performDelete) {
      console.log("deleted", list)
    }
    props.actions.toggleDeleteDialog(false)
  }

  if (todoPanel.deleteDialog && todoPanel.deleteDialog.show) {
    displayDialog = <Dialog title={todoPanel.deleteDialog.list.title} actions={deleteActions} modal={false} open={todoPanel.deleteDialog.show} onRequestClose={() => handleDelete(false)}>Are you sure you want to delete this list?</Dialog>
  }

  lists = todoPanel.lists.map(list => {
    let formatedDeadline = new Date(list.deadline).toDateString()

    return <div key={list.id} className="content">
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
            {list.tasks.map(task =>
                <ListItem
                  className="list-item-todo"
                  leftCheckbox={<Checkbox onClick={e => toggleCheckbox(e.target.checked, list.id, task.id)} checked={task.completed} />}
                  primaryText={<span className={task.completed ? "task-striked" : ""}>{task.value}</span>}
                  key={task.id}
                />
            )}
          </List>
        </CardText>
        <CardActions className="card-actions">
          <IconButton onClick={() => handleDeleteList(list)} tooltip="Delete" tooltipPosition="bottom-center"><i className="material-icons md-18">delete</i></IconButton>
          <IconButton onClick={() => handleEditList(list)} tooltip="Edit" tooltipPosition="bottom-center"><i className="material-icons md-18">mode_edit</i></IconButton>
          <IconButton onClick={() => handleMarkCompleted(list)} tooltip="Mark as Complete" tooltipPosition="bottom-center"><i className="material-icons md-18">check_box</i></IconButton>
        </CardActions>
        {displayDialog}
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
