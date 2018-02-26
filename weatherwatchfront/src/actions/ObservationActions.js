import observationService

export const initializeObservations = () => {
  return async (dispatch) => {
    const observations = await observationService.getAll()
    dispatch({
      type: 'INIT_OBSERVATIONS',
      observations
    })
  }
}

export const createObservation = (observation) => {
  return async (dispatch) => {
    const observation = await observationService.createObservation()
    dispatch({
      type: 'CREATE_OBSERVATION',
      observation
    })
  }
}

export const getOne = (id) => {
  return async (dispatch) => {
    const observation = await observationService.getOne(id)
  }
}