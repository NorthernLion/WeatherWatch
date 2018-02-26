import observationService from '../services/Observations'

export const submitObservation = (e) => {
  e.preventDefault()
  return async (dispatch, getState) => {
    const observation = {
    }
    try {
      await observationService.create(observation)
    } catch (e) {
      dispatch('error!')
    }
  }
}