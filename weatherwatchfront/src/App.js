import React from 'react';
import ObservationForm from './components/ObservationForm'
import { connect } from 'react-redux'
import { initializeLocations } from './actions/LocationActions'
import { initializeObservations } from './actions/ObservationActions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import Location from './components/Location'


class App extends React.Component {
  componentWillMount() {
    this.props.initializeLocations()
    //this.props.initializeObservations()
  }

  render() {
    return (      
      <div className="container">
        <NavBar />
        {this.props.showForm
          ? <ObservationForm />
          : ''}
          
        {this.props.selectedLocation 
          ? <Location />
          : <MainPage locations={this.props.locations} />
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showForm: state.app.showForm,
    selectedLocation: state.app.selectedLocation,
    locations: state.locations
  }
}


export default connect(
  mapStateToProps,
  { initializeLocations, initializeObservations }
)(App)
