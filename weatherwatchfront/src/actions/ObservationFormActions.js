import observationService from '../services/Observations'
import { clearTime, newTime } from './TimeActions'
import { initializeLocations } from './LocationActions'
import { toggleForm, clearLocation } from './RouteActions'
import { createNotification } from './NotificationActions'

export const submitObservation = (e) => {
  e.preventDefault()
  return async (dispatch, getState) => {
    const time = getState().time

    const observation = {
      temperature: e.target.temperature.value,
      locationId: e.target.location.value,
      time
    }

    try {
      const createdObs = await observationService.create(observation)
      dispatch(clearTime())
      dispatch(initializeLocations())
      dispatch(toggleForm())
      dispatch(clearLocation())
      dispatch(createNotification({ message: 'Temperature ' + createdObs.temperature + ' reported succesfully for selected city' }))
    } catch (ex) {
      const notification = {
        message: ex.response.data,
        error: true
      }
      dispatch(createNotification(notification))
    }
  }
}

export const changeTime = (e) => {  
  return async (dispatch) => {
    try {
      if(e._d) {
        dispatch(newTime(e._d))
      }      
    } catch (ex) {
    }
  }
}