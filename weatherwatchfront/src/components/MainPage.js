import React from 'react'
import LocationCard from './LocationCard'

const MainPage = ({ locations }) => {

  return(   
      <div>
      {locations.map(location => <LocationCard key={location.id} location={location}/>)}
    </div>
  )
  
}


export default MainPage
