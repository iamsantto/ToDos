import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

import { TextFieldInput } from './'

const textField = value => {
  return <TextFieldInput label={value.label} type="text" value={value} fullWidth={true} />
}

let AddTodo = props => {
  const submit = value => {
    props.addTaskToState(value.task)
    props.close()
  }

  const { handleSubmit } = props

  return (
    <Dialog title="Add a Task" modal={true} open={props.show}>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Field name="task" label="Task" component={textField} />
        </div>
        <div className="pull-right">
          <FlatButton label="Done" primary={true} type="submit" />
        </div>
      </form>
    </Dialog>
  )
}

AddTodo = reduxForm({
  form: 'addTodo'
})(AddTodo)

export default AddTodo
