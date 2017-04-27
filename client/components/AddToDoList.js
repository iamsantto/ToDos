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

import { TextFieldInput } from './'

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

  let { todoPanel } = props

  const submit = values => {
    console.log(values)
    props.close()
    props.actions.clearValues()
  }

  const handleNewCheckListItem = () => {

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

  const handleOnCheck = value => {
    props.actions.tagLabel(value)
  }

  if (todoPanel.create.labels)
    labels = todoPanel.create.labels.map(label =>
      <Chip key={label} onRequestDelete={() => handleTagDelete(label)}>{label}</Chip>
    )

  let checkboxes = 'No Labels Available.'

  if (props.labels)
    checkboxes = props.labels.map(label => {
      return <Checkbox key={label} label={label} onCheck={() => handleOnCheck(label)} />
    })

  if (todoPanel.showTagging) {
    labelTagger = (
      <Dialog title={<div>Select Tags</div>} modal={true} open={todoPanel.showTagging}>
        <div className="checkboxes">
          {checkboxes}
        </div>
        <div className="pull-right">
          <FlatButton label="Done" onClick={() => handleDoneTagging()} primary={true} type="button" />
        </div>
      </Dialog>
    )
  }

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
        <span className="chips">
          {labels}
        </span>
      </div>
      <div className="content">
        <Subheader className="small-top-pad">Checklist</Subheader>
        <FlatButton className="pull-left"
        label="Add Checklist Item"
        labelPosition="after"
        primary={true}
        onClick={handleNewCheckListItem}
        icon={<i className="material-icons">add</i>}
        />
      </div><br />
      <div className="content">
        <RaisedButton label="Create" primary={true} type="submit" />
      </div>
      {labelTagger}
    </form>
  )
}

AddTodoList = reduxForm({
  form: 'addToDoList'
})(AddTodoList)

export default AddTodoList

