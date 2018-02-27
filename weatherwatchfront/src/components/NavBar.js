import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavBar = (props) => {

  return (
    <Navbar inverse collapseOnSelect fluid >
      <Navbar.Header>
        <Navbar.Brand>
          Weather-Watch
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
          <button
            onClick={() => 'tadaa'}
            className='btn btn-primary'>
            Add Observation
          </button>
      </Navbar.Form>
    </Navbar>
  )
}

export default NavBar