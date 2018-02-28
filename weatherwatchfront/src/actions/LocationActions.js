import locationService from '../services/Locations'

export const initializeLocations = () => {
  return async (dispatch) => {
    const locations = await locationService.getAll()
    dispatch({
      type: 'INIT_LOCATIONS',
      locations
    })
  }
}

export const getOne = (id) => {
  return async (dispatch) => {
    await locationService.getOne(id)
  }
}