import React from 'react'
import FlatButton from 'material-ui/FlatButton'

import { AddModal } from './'

const AddNew = props => {
  const label = `Add ${props.type}`

  const handleOnClick = () => {
    props.actions.showAddModal(props.type)
  }

  return (
    <div>
      <FlatButton
        className={props.className}
        label={label}
        labelPosition="after"
        primary={true}
        onClick={handleOnClick}
        icon={<i className="material-icons">add</i>}
      />
      <AddModal labels={props.labels} categories={props.categories} todoPanel={props.todoPanel} actions={props.actions} isOpen={props.showModal} />
    </div>
  )
}

export default AddNew
