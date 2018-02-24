const mongoose = require('mongoose')

const Observation = mongoose.model('Observation', {
  temperature: String,
  time: Date,
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }
})

Observation.format = function (observation) {
  return {
    id: observation._id,
    temperature: observation.temperature,
    location: observation.location,
    time: observation.time
  }
}

module.exports = Observation
