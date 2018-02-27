const TimeReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_TIME':
      return action.time
    case 'CLEAR_TIME':
      return ''
    case 'GET_TIME':
      return state
    default:
      return state
  }
}
export default TimeReducer