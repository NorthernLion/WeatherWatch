const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

statistics = (observations) => {
  const lastDayObservations = observations.filter(observation => new Date(observation.time) > yesterday)
  let max ='N/A'
  let min ='N/A'
  let latest ='N/A'
  if (lastDayObservations.length > 0) {
    const lastDayTemperatures = lastDayObservations.map(observation => parseInt(observation.temperature))
    max = maxTemperature(lastDayTemperatures)
    min = minTemperature(lastDayTemperatures)
  } 
  if (observations.length > 0) {
    const observationsInOrder = observations.sort((th, nd) => new Date(th.time) - new Date(nd.time))
    latest = latestTemperature(observationsInOrder)
  }
  return ({
    max,
    min,
    latest
  })
}

maxTemperature = (temperatures) => Math.max(...temperatures)
minTemperature = (temperatures) => Math.min(...temperatures)
latestTemperature = (temperatures) => parseInt(temperatures.slice(-1)[0].temperature)

module.exports = { statistics }