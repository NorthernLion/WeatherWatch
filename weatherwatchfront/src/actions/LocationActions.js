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
    const location = await locationService.getOne(id)
  }
}