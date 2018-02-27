import React from 'react'
import LocationCard from './LocationCard'
import { Row, Col, } from 'react-bootstrap';


const MainPage = ({ locations }) => {

  return(   
      <div>
      {locations.map(location => <LocationCard location={location}/>)}
    </div>
  )
  
}


export default MainPage
