import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Col, Row, Button, Image, Well } from 'react-bootstrap'
import moment from 'moment'
import { submitObservation } from '../actions/ObservationFormActions'

const Datetime = require('react-datetime')

const ObservationForm = () => {
  return (

    <div>
      <Well>
        <Row>
          <p>This is where alerts will be at</p>
        </Row>

        <Row>
          <Col md={6}>
            <form onSubmit={submitObservation}>
              <Row>
                <FormGroup>
                  <Col md={9}>
                    <ControlLabel>Select location</ControlLabel>
                    <FormControl componentClass="select" placeholder="Select a location" name="locations">
                      <option value="select">Select...</option>
                      
                    </FormControl>
                  </Col>

                  <Col md={3}>
                    <ControlLabel>Temperature</ControlLabel>
                    <FormControl type="number" name="temperature">
                    </FormControl>
                  </Col>
                </FormGroup>
              </Row>

              <Row>
                <Col md={6}>
                  <ControlLabel>Time in GMT format</ControlLabel>
                  <Datetime name="dateTime" isValidDate={this.valid} />
                  <HelpBlock>Help messages?</HelpBlock>
                </Col>
              </Row>
              <FormGroup>
                <input type="submit" value="Submit" />
                <HelpBlock>Every field is required!</HelpBlock>
              </FormGroup>
            </form>
          </Col>

          <Col md={6}>
            <p>Image here</p>
          </Col>

        </Row>

      </Well>
    </div>
  )
}
//{this.props.locations.map(location => <option key={location.id} value={location}>{location}</option>)}

export default ObservationForm