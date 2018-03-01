const Observation = require('../models/observation')
const Location = require('../models/location')
const observationRouter = require('express').Router()


validateObservation = async (observation) => {
  const errors = []
  const { time, temperature, locationId } = observation
  locations = await Location.find({})
  if (!time) {
    errors.push('The date format is incorrect please use calendar to select date')
  } else if (new Date(time) > new Date()) {
    errors.push('You cannot report temperature of the future')
  }
  const matchingLocation = locations.filter(l => l.id === locationId)
  if (locationId === undefined || matchingLocation.length < 0) {
    errors.push('You did not give a valid location')
  }
  if (isNaN(temperature)) {
    errors.push('Please give temperature as numbers')
  }
  if (temperature > 100 || temperature < -100) {
    errors.push('Please select temperature between -100 and 100')
  }
  return errors
}

observationRouter.post('/', async (req, res) => {
  const { time, locationId, temperature} = req.body
  const errors = await validateObservation(req.body)
  console.log(errors)
  if (errors.length > 0) {
    return res.status(400).send(errors.join(' & '))
  }
  try {
    const observation = new Observation({ time, locationId, temperature }) 
    const result = await observation.save()

    const locationFromDb = await Location.findById(locationId)

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