import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'

import { TextFieldInput } from './'

const textField = value => {
  return <TextFieldInput label="Label" type="text" value={value} fullWidth={true} />
}

let AddLabel = props => {
  const submit = values => {
    console.log(values)
    props.close()
  }

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="row">
        <div className="col-md-10">
          <Field name="label" component={textField} /><br />
        </div>
        <div className="col-md-2 lg-top-pad">
          <RaisedButton label="Add" primary={true} type="submit" />
        </div>
      </div>
    </form>
  )
}

AddLabel = reduxForm({
  form: 'addLabel'
})(AddLabel)

export default AddLabel
