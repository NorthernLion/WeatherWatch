const mongoose = require('mongoose')

const Location = mongoose.model('Location', {
  name: String,
  amplitude: String,
  longitude: String,
  observations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Observation' }]  
})

Location.format = function (location) {
  return {
    id: location._id,
    amplitude: location.amplitude,
    longitude: location.longitude,
    observations: location.observations
  }
}

module.exports = Location