export const newNotification = (notification) => {
  return {
    type: 'NEW_NOTIFICATION',
    notification
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

export const createNotification = (notification) => {
  return async (dispatch) => {
    dispatch(newNotification(notification))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 3000)
  }
}