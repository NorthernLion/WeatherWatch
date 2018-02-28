
import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

class Notification extends React.Component {

  render() {
    if (!this.props.notification.message) {
      return null
    }
    return (
      <Alert bsStyle={this.props.notification.error ? 'danger' : 'success'}>
        {this.props.notification.message}
      </Alert>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, null)(Notification)