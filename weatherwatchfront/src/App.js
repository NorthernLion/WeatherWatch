import React from 'react';
import ObservationForm from './components/ObservationForm'
import { connect } from 'react-redux'
import { initializeLocations } from './actions/LocationActions'
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import Location from './components/Location'
import Notification from './components/Notification'


class App extends React.Component {
  componentWillMount() {
    this.props.initializeLocations()
  }

  render() {
    return (      
      <div className="container">
        <NavBar />
        <Notification />
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
    showForm: state.route.showForm,
    selectedLocation: state.route.selectedLocation,
    locations: state.locations
  }
}


export default connect(
  mapStateToProps,
  { initializeLocations }
)(App)
