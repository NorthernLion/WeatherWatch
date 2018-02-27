import React from 'react';
import ObservationForm from './components/ObservationForm'
import { connect } from 'react-redux'
import { initializeLocations } from './actions/LocationActions'
import { initializeObservations } from './actions/ObservationActions'


class App extends React.Component {
  componentWillMount() {
    this.props.initializeLocations()
    //this.props.initializeObservations()
  }

  render() {
    return (      
      <div className="container">
        <ObservationForm />
      </div>
    )
  }
}

export default connect(
  null,
  { initializeLocations, initializeObservations }
)(App)
