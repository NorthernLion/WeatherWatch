export const newTime = (time) => {
  return {
    type: 'NEW_TIME',
    time
  }
}

export const clearTime = (time) => {
  return {
    type: 'CLEAR_TIME'
  }
}
