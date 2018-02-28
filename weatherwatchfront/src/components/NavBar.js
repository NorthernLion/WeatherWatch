import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { toggleForm, clearLocation } from '../actions/AppActions'
import { connect } from 'react-redux'

const NavBar = (props) => {

  return (
    <Navbar inverse collapseOnSelect fluid >
      <Navbar.Header>
        <Navbar.Brand>
          <a onClick={props.clearLocation}>Weather-Watch</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
          <button
            onClick={props.toggleForm}
            className='btn btn-primary'>
            Add Observation
          </button>
      </Navbar.Form>
    </Navbar>
  )
}

export default connect(
  null,
  { toggleForm, clearLocation }
  )(NavBar)
