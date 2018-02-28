const Location = require('../models/location')
const locationRouter = require('express').Router()
const { statistics } = require('../utils/location_helper')

locationRouter.get('/', async (req, res) => {
  const locations = await Location
    .find({})
    .populate('observations', {time: 1, temperature: 1})
  locations.map(location => {
    const {latest, max, min} = statistics(location.observations)
    location.min = min
    location.max = max
    location.latest = latest
  })
  const formatedLocations = locations.map(Location.format)
  res.json(formatedLocations)
})



module.exports = locationRouter