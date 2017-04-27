import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'

import { TextFieldInput } from './'

const textField = value => {
  return <TextFieldInput label="Title" type="text" value={value} />
}

let AddTodoList = props => {
  const submit = values => {
    console.log(values)
    props.close()
  }

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit(submit)} className="col-md-offset-2 col-md-8 text-center">
      <Field name="title" component={textField} /><br />
      <RaisedButton label="Create" primary={true} type="submit" />
    </form>
  )
}

AddTodoList = reduxForm({
  form: 'addToDoList'
})(AddTodoList)

export default AddTodoList

