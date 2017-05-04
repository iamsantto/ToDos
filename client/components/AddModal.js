import React from 'react'
import Dialog from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'

import { AddLabel, AddCategory, AddTodoList } from './'

const AddModal = props => {
  let children

  const handleClose = () => {
    props.actions.hideAddModal()
    props.actions.clearValues()
  }

  const closeButton = <IconButton className="pull-right" onClick={handleClose}><i className="material-icons">clear</i></IconButton>

  if (props.isOpen && props.isOpen.addCategory) {
    children = (
      <Dialog title={<div>Add Category {closeButton}</div>} modal={true} open={props.isOpen && props.isOpen.addCategory} onRequestClose={handleClose}>
        <AddCategory close={props.actions.hideAddModal} />
      </Dialog>
    )
  } else if (props.isOpen && props.isOpen.addLabel) {
      children = (
        <Dialog title={<div>Add Label {closeButton}</div>} modal={true} open={props.isOpen && props.isOpen.addLabel} onRequestClose={handleClose}>
          <AddLabel close={props.actions.hideAddModal} />
        </Dialog>
      )
  } else if (props.isOpen && props.isOpen.addToDoList) {
      children = (
        <Dialog title={<div>Add To-Do List {closeButton}</div>} modal={true} open={props.isOpen && props.isOpen.addToDoList} onRequestClose={handleClose}>
          <AddTodoList labels={props.labels} categories={props.categories} actions={props.actions} todoPanel={props.todoPanel} />
        </Dialog>
      )
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default AddModal
