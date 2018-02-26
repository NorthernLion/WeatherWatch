import locationService from '../services/Locations'

const LocationReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_LOCATIONS':
      return action.locations
    default:
      return state
  }
}

export default LocationReducer