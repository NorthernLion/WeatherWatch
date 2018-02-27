import React from 'react';
import { Well, Col, Button } from 'react-bootstrap';
import moment from 'moment';

const LocationCard = ({ location }) => {
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
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </Well>
    </Col>
  )

}

export default LocationCard