import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/locations' //api/locations

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const create = async (newSighting) => {
  const response = await axios.post(baseUrl, newSighting)
  return response.data
}

export default { getAll, create, getOne }