import _ from 'lodash'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Subheader from 'material-ui/Subheader'
import Chip from 'material-ui/Chip'
import Dialog from 'material-ui/Dialog'
import Checkbox from 'material-ui/Checkbox'
import {Table, TableBody, TableRow, TableRowColumn, } from 'material-ui/Table'

import { AddToDo, TextFieldInput } from './'

const textField = value => {
  return <TextFieldInput label={value.label} type="text" value={value} fullWidth={true} />
}

const DateTimeFormat = Intl.DateTimeFormat

const datePicker = props => {
  return <DatePicker
         value = {props.input.value ? props.input.value : null}
         onChange = {(event, value) => {props.input.onChange(value)}}
         floatingLabelText={props.label}
         formatDate={new DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
         }).format}
         />
}

let AddTodoList = props => {
  let labels
  let labelTagger
  let categories
  let todoAdder
  let tasks

  let { todoPanel } = props

  const submit = values => {
    let finalValues = Object.assign({}, values, todoPanel.create)

    props.actions.saveTodoList(finalValues)
    props.actions.hideAddModal()
    props.actions.clearValues()
  }

  const handleNewCheckListItem = () => {
    props.actions.showTodoAdder()
  }

  const handleTagLabel = () => {
    props.actions.showTagging()
  }

  const handleTagDelete = value => {
    props.actions.unTagLabel(value)
  }

  const handleDoneTagging = () => {
    props.actions.hideTagging()
  }

  const toggleCheckbox = (isChecked, value) => {
    if (isChecked)
      props.actions.tagLabel(value)
    else
      props.actions.unTagLabel(value)
  }

  const isChecked = value => {
    if (todoPanel.create.labels)
      return _.includes(todoPanel.create.labels, value)
  }

  if (todoPanel.create.labels)
    labels = todoPanel.create.labels.map(label =>
      <Chip key={label} onRequestDelete={() => handleTagDelete(label)}>{label}</Chip>
    )

  if (todoPanel.create.tasks)
    tasks = todoPanel.create.tasks.map((task, index) =>
      <TableRow key={index}>
        <TableRowColumn>{task}</TableRowColumn>
      </TableRow>
    )

  let checkboxes = 'No Labels Available.'

  if (props.labels)
    checkboxes = props.labels.map(label => {
      return <Checkbox key={label} label={label} onClick={e => toggleCheckbox(e.target.checked, label)} checked={isChecked(label)} />
    })

  if (todoPanel.showTagging) {
    labelTagger = (
      <Dialog title="Select Tags" modal={true} open={todoPanel.showTagging}>
        <div className="checkboxes">
          {checkboxes}
        </div>
        <div className="pull-right">
          <FlatButton label="Done" onClick={() => handleDoneTagging()} primary={true} type="button" />
        </div>
      </Dialog>
    )
  }

  if (todoPanel.showTodoAdder)
    todoAdder = <AddToDo show={todoPanel.showTodoAdder} close={props.actions.hideToDoAdder} addTaskToState={props.actions.addTaskToState} />

  if (props.categories)
    categories = props.categories.map((category, index) => {
      return <MenuItem key={index} value={index} primaryText={category.name} />
    })

  const selectCategory = props => {
    return <SelectField
            floatingLabelText={props.label}
            value={props.input.value}
            onChange={(event, value) => {props.input.onChange(value)}}
            autoWidth={true}
           >
           {categories}
           </SelectField>
  }


  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="title" label="Title" component={textField} /><br />
      <span className="chips">
        {labels}
      </span>
      <div className="row">
        <div className="col-md-6">
          <Field name="category" label="Category" component={selectCategory} />
        </div>
        <div className="col-md-6">
          <Field name="deadline" label="Deadline" component={datePicker} />
        </div>
      </div>
      <div className="content">
        <Subheader>Labels</Subheader>
        <FlatButton className="pull-left"
        label="Add Label"
        labelPosition="after"
        primary={true}
        onClick={handleTagLabel}
        icon={<i className="material-icons">add</i>}
        />
      </div>
      <div className="content">
        <Subheader className="small-top-pad">Checklist</Subheader>
        <FlatButton className="pull-left"
        label="Add Checklist Item"
        labelPosition="after"
        primary={true}
        onClick={handleNewCheckListItem}
        icon={<i className="material-icons">add</i>}
        /><br /><br />
        <div className="add-table">
          <Table selectable={false} className="content">
            <TableBody>
              {tasks}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="content">
        <RaisedButton label="Create" primary={true} type="submit" />
      </div>
      {labelTagger}
      {todoAdder}
    </form>
  )
}

AddTodoList = reduxForm({
  form: 'addToDoList'
})(AddTodoList)

export default AddTodoList

