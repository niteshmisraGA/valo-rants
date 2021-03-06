import axios from 'axios'

const BASE = process.env.REACT_APP_AIRTABLE_BASE
const KEY = process.env.REACT_APP_AIRTABLE_KEY

export const BASE_URL = `https://api.airtable.com/v0/${BASE}/agents`
export const config = {
  headers: {
    Authorization: `Bearer ${KEY}`
  }
}

export const getAllAgents = async () => {
  const response = await axios.get(BASE_URL, config)
  // console.log(response.data.records)
  const res = response.data.records
  return res
}

export const getAgent = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, config)
  // console.log(response.data.records)
  const res = response.data
  return res
}

export const getAbilities = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, config)
  console.log(response.data)
  const res = response.data.fields.agentAbilities
  return res
}

export const postAgent = async (body) => {
  const response = await axios.post(BASE_URL, { fields: body }, config)
  return response.data
}
