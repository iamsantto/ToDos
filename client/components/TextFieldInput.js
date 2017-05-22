import React from 'react'
import TextField from 'material-ui/TextField'

const TextFieldInput = props => {
  return (
    <TextField
      hintText={props.hint}
      fullWidth={props.fullWidth || false}
      floatingLabelText={props.label}
      type={props.type}
      multiLine={props.multiline || false}
      {...props.value.input}
    />
  )
}

export default TextFieldInput
