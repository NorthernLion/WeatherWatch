const Observation = require('../models/observation')
const observationRouter = require('express').Router()


validateObservation = async (observation) => {
  const errors = []
  const { time, temperature, location } = observation
  if (!isNaN(time.getTime())) {
    errors.push('The date format is not suported by the backend. ')
  }
  if (location === undefined) {
    errors.push('You did not give a valid location')
  }
  if (temperature > 100 || temperature < -100) {
    errors.push('That is some extreme temperature! Please select temperature between -100 and 100')
  }
  return errors
}

observationRouter.post('/', async (req, res) => {
  const observationParams = req.body
  const errors = await validateObservation(observationParams)
  if (errors.length > 0) {
    return response.status(400).send(errors.join('\n'))
  }
  try {
    
  } catch (error) {
    
  }
})

module.exports = observationRouter