import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'

import { TextFieldInput } from './'

const textField = value => {
  return <TextFieldInput label="Label" type="text" value={value} />
}

let AddLabel = props => {
  const submit = values => {
    console.log(values)
  }

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit(submit)} className="col-md-offset-2 col-md-8 text-center">
      <Field name="label" component={textField} /><br />
      <RaisedButton label="Add" primary={true} type="submit" />
    </form>
  )
}

AddLabel = reduxForm({
  form: 'addLabel'
})(AddLabel)

export default AddLabel
