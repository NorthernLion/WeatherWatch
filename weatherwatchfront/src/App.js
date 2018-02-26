import React from 'react';
import ObservationForm from './components/ObservationForm'
import { connect } from 'react-redux'
import initializeLocations from './reducers/LocationReducer'
import initializeObservations from './reducers/ObservationReducer'


class App extends React.Component {
  componentWillMount() {

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
