import React from 'react';
import ObservationForm from './components/ObservationForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (      
      <div className="container">
        <ObservationForm />
      </div>
    )
  }
}

export default App;
