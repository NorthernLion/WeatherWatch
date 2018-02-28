import axios from 'axios'
const baseUrl = '/api/observations'

const create = async (newObservation) => {
  const response = await axios.post(baseUrl, newObservation)
  return response.data
}

export default { create }