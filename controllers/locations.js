const Location = require('../models/location')
const locationRouter = require('express').Router()

locationRouter.get('/', async (req, res) => {
  const locations = await Location
    .find({})
    .populate('observations', {time: 1, temperature: 1})
  res.json(locations.map(Location.format))
})



module.exports = locationRouter