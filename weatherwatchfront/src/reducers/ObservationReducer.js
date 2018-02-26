import ovservationService from '../services/Observations'

const ObservationReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_OBSERVATIONS':
      return action.observations
    case 'NEW_OBSERVATION':
      return [...state, action.observation]  
    default:
      return state
  }
}

export default ObservationReducer