export const setLocation = (location) => {
  return {
    type: 'SET_LOCATION',
    location
  }
}

export const clearLocation = () => {
  return {
    type: 'CLEAR_LOCATION'
  }
}

export const toggleForm = () => {
  return async (dispatch) => {
    dispatch({
      type: 'TOGGLE_FORM'
    })
  }
}

