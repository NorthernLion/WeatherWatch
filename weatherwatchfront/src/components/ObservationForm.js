import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Col, Row, Button, Image, Well } from 'react-bootstrap'
import moment from 'moment'
import { submitObservation, changeTime } from '../actions/ObservationFormActions'
import { toggleForm } from '../actions/AppActions'
import { connect } from 'react-redux'
import Notification from './Notification'

const Datetime = require('react-datetime')

class ObservationForm extends React.Component {

  valid(current) {
    const now = moment();
    return current < now;
  }

  render() {
    return (

      <div>
        <Well>
          <Row>
            <Notification />
          </Row>

          <Row>
            <Col md={6}>
              <form onSubmit={this.props.submitObservation}>
                <Row>
                  <FormGroup>
                    <Col md={5}>
                      <ControlLabel>Select location</ControlLabel>
                      <FormControl required="true" componentClass="select" name="location">
                        {this.props.locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
                      </FormControl>
                    </Col>

                    <Col md={3}>
                      <ControlLabel>Temperature</ControlLabel>
                      <FormControl type="number" name="temperature" required="true">
                      </FormControl>
                    </Col>
                  </FormGroup>
                </Row>

                <Row>
                  <Col md={8}>
                    <ControlLabel>Local time of measurement</ControlLabel>
                    <Datetime onChange={this.props.changeTime} name="time" isValidDate={this.valid}/>
                    <HelpBlock>Local time will be automaticly turned to GMT</HelpBlock>
                  </Col>
                </Row>
                <FormGroup>
                  <Col md={2}>
                  <input className='btn btn-primary' type="submit" value="Submit" />
                  </ Col>
                  <button
                    onClick={this.props.toggleForm}
                    className='btn btn-primary'>
                    Cansel
                </button>
                  <HelpBlock>Every field is required!</HelpBlock>
                </FormGroup>

              </form>
            </Col>
          </Row>
        </Well>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

export default connect(
  mapStateToProps,
  { submitObservation, changeTime, toggleForm }
)(ObservationForm)
