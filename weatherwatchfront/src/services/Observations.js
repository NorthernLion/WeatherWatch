import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/observations'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObservation) => {
  console.log(newObservation)
  const response = await axios.post(baseUrl, newObservation)
  return response.data
}

export default { getAll, create }