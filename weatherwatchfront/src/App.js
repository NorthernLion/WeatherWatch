import React from 'react';
import ObservationForm from './components/ObservationForm'
import { connect } from 'react-redux'
import { initializeLocations } from './actions/LocationActions'
import { initializeObservations } from './actions/ObservationActions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'


class App extends React.Component {
  componentWillMount() {
    this.props.initializeLocations()
    //this.props.initializeObservations()
  }

  render() {
    return (      
      <div className="container">
        <NavBar />
        {this.props.creating
          ? <ObservationForm />
          : <p>tada</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    creating: state.creating
  }
}


export default connect(
  null,
  { initializeLocations, initializeObservations }
)(App)
