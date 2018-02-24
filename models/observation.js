const mongoose = require('mongoose')

const Observation = mongoose.model('Observation', {
  temperature: String,
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }
})

Observation.format = function (observation) {
  return {
    id: observation._id,
    temperature: observation.temperature,
    location: observation.location
  }
}

module.exports = Observation
