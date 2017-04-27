import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'

import { TextFieldInput } from './'

const textField = value => {
  return <TextFieldInput label="Category" type="text" value={value} />
}

let Addcategory = props => {
  const submit = values => {
    console.log(values)
  }

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit(submit)} className="col-md-offset-2 col-md-8 text-center">
      <Field name="category" component={textField} /><br />
      <RaisedButton label="Add" primary={true} type="submit" />
    </form>
  )
}

Addcategory = reduxForm({
  form: 'addcategory'
})(Addcategory)

export default Addcategory
