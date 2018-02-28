import observationService from '../services/Observations'


export const createObservation = (observation) => {
  return async (dispatch) => {
    const observation = await observationService.createObservation()
  }
}
