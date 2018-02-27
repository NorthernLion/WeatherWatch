const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.notification
    case 'CLEAR_NOTIFICATION':
      return {}
    default:
      return state
  }
}

export default notificationReducer