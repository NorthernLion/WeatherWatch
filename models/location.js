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
    name: location.name,
    amplitude: location.amplitude,
    longitude: location.longitude,
    min: location.min,
    max: location.max,
    latest: location.latest,
    observations: location.observations
  }
}

module.exports = Location