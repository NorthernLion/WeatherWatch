import React from 'react'
import { connect } from 'react-redux'
import { clearLocation } from '../actions/RouteActions'
import { Table, Col, Row } from 'react-bootstrap'

const Location = (props) => {
  const location = props.selectedLocation
  const sortedLocations = location.observations.sort((th, nd) => new Date(nd.time) - new Date(th.time))
  return (
    <div>
      <div>
        <Row>
          <Col lg={3} >
            <h2>{location.name}</h2>
            <p>{location.amplitude}, {location.longitude}</p>
          </Col>
        </Row>

        <Table striped>
          <tbody>
            <tr>
              <th>Temperature (°C)</th>
              <th>Date (GMT)</th>
              <th>Time (GMT) </th>
              <th>Your time</th>
            </tr>
          </tbody>
          <tbody>
            {sortedLocations.map(observation =>
              <tr key={observation.id}>
                <td>
                  {observation.temperature}
                </td>
                <td>
                  {observation.time.substring(0, 10)}
                </td>
                <td>
                  {observation.time.substring(11, 16)}
                </td>
                <td>
                  {new Date(observation.time).toString()}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <button
        onClick={props.clearLocation}
        className='btn btn-primary'>
        Back
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedLocation: state.route.selectedLocation
  }
}

export default connect(
  mapStateToProps,
  { clearLocation }
)(Location)
