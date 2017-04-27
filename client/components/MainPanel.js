import React from 'react'
import { AddNew } from './'

const MainPanel = props => {
  return (
    <div className="col-md-9 main-panel">
      <div className="row content">
        <div className="col-md-8">
          <h3 className="">{props.title}</h3>
        </div>
        <div className="col-md-4 med-top-pad">
          <AddNew actions={props.actions} showModal={props.showModal} className="pull-right" type="To-Do" />
        </div>
      </div>
      <div className="content row">

      </div>
    </div>
  )
}

export default MainPanel
