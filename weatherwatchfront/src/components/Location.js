import React from 'react'
import { connect } from 'react-redux'
import { clearLocation } from '../actions/AppActions'

const Location = (props) => {
  return (
    <div>

    
    <p>This is location specific page</p>

      <button
        onClick={props.clearLocation}
        className='btn btn-primary'>
        Back
      </button>
    </div>
  )
}

export default connect(
  null,
  { clearLocation }
)(Location)
