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
    props.close()
  }

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit(submit)} className="col-md-offset-2 col-md-8 text-center">
      <div className="col-md-6">
        <Field name="category" component={textField} />
      </div>
      <div className="col-md-offset-2 col-md-4 med-top-pad">
        <RaisedButton label="Add" primary={true} type="submit" />
      </div>
    </form>
  )
}

Addcategory = reduxForm({
  form: 'addcategory'
})(Addcategory)

export default Addcategory
