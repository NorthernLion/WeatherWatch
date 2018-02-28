
const initialState = {
  selectedLocation: null,
  showForm: false
}

const RouterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, selectedLocation: action.location }
    case 'CLEAR_LOCATION':
      return { ...state, selectedLocation: null }
    case 'TOGGLE_FORM':
      return { ...state, showForm: !state.showForm}
    default:
      return state
  }
}

export default RouterReducer