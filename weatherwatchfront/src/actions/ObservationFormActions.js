import observationService from '../services/Observations'
import moment from 'moment'
import { clearTime, newTime } from './TimeActions'
import { initializeLocations } from './LocationActions'
import { toggleForm } from './AppActions'

export const submitObservation = (e) => {
  e.preventDefault()
  return async (dispatch, getState) => {
    const time = getState().time

    const observation = {
      temperature: e.target.temperature.value,
      location: e.target.location.value,
      time
    }

    try {
      await observationService.create(observation)
      dispatch(clearTime())
      dispatch(initializeLocations())
      dispatch(toggleForm())
    } catch (ex) {
      console.log(ex)
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