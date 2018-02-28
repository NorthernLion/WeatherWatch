import React from 'react'
import { Well, Col, Button } from 'react-bootstrap'
import moment from 'moment'
import { setLocation } from '../actions/AppActions'
import { connect } from 'react-redux'

class LocationCard extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Col lg={5} md={7} sm={12}>
        <Well>
          <div class="card">
            <div class="card-header">
              Featured
        </div>
            <div class="card-block">
              <h4 class="card-title">Special title treatment</h4>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button
                onClick={() => this.props.setLocation(location)}
                className='btn btn-primary'>
                Cansel
                </button>
            </div>
          </div>
        </Well>
      </Col>
    )
  }
}

export default connect(
  null,
  { setLocation }
)(LocationCard)