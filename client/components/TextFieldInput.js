import React from 'react'
import TextField from 'material-ui/TextField'

const TextFieldInput = props => {
  return (
    <TextField
      hintText={props.hint}
      floatingLabelText={props.label}
      type={props.type}
      {...props.value.input}
    />
  )
}

export default TextFieldInput
