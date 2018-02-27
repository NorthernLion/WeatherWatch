const Observation = require('../models/observation')
const Location = require('../models/location')
const observationRouter = require('express').Router()


validateObservation = async (observation) => {
  const errors = []
  const { time, temperature, location } = observation
  //if (!isNaN(time.getTime())) {
   // errors.push('The date format is not suported by the backend. ')
  //}
  if (location === undefined) {
    errors.push('You did not give a valid location')
  }
  if (temperature > 100 || temperature < -100) {
    errors.push('That is some extreme temperature! Please select temperature between -100 and 100')
  }
  return errors
}

observationRouter.post('/', async (req, res) => {
  const { time, location, temperature} = req.body
  const errors = await validateObservation(req.body)
  if (errors.length > 0) {
    return res.status(400).send(errors.join('\n'))
  }
  try {
    const observation = new Observation({ time, location, temperature }) 
    const result = await observation.save()

    const locationFromDb = await Location.findById(location)

    locationFromDb.observations = locationFromDb.observations.concat(observation.id)
    
    await locationFromDb.save()

    res.status(201).json(result)
  
  } catch (error) {
    res.status(404).send('Could not create observation')
  }
})

observationRouter.get('/', async (request, response) => {
  const observations = await Observation
    .find({})
    .populate('location', { name: 1, temperature: 1 })

  response.json(observations)
})


module.exports = observationRouter