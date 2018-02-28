import React from 'react'
import { Well, Col, Row } from 'react-bootstrap'
import { setLocation } from '../actions/RouteActions'
import { connect } from 'react-redux'

class LocationCard extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Col lg={4} md={5} sm={8}>
        <Well>

          <div className="card">
            <div className="card-header">
              <Row>
                <Col lg={5} md={7} >
                  <h3>{location.name} </h3>
                  <i>{location.amplitude}, {location.longitude}</i>
                </Col>
                <Col lg={5} md={7} >
                  <h2>{location.latest}</h2>
                  <p>Latest</p>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={6} >
                  <h5>Last 24 Hours </h5>
                </Col>
                <Col lg={4} md={7} >
                  <h5>{location.max}</h5>
                  <p>Highest</p>
                </Col>
                <Col lg={4} md={7} >
                  <h5>{location.min}</h5>
                  <p>Lowest</p>
                </Col>
              </Row>
              <Row>
                <button
                  onClick={() => this.props.setLocation(location)}
                  className='btn btn-primary center-block'>
                  Observations
                </button>
              </Row>
            </div>
          </div>
        </Well>
      </Col >
    )
  }
}


export default connect(
  null,
  { setLocation }
)(LocationCard)