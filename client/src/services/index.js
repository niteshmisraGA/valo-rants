import axios from 'axios'

const BASE = process.env.REACT_APP_AIRTABLE_BASE
// const BASE = 'appuqLVISouxQSzLO'

const KEY = process.env.REACT_APP_AIRTABLE_KEY
// const KEY =  'keyEd6eDEHgjL9shp'

export const BASE_URL = `https://api.airtable.com/v0/${BASE}/agents?api_key=${KEY}`
export const config = {
  headers: {
    Authorization: `Bearer ${KEY}`
  }
}

export const getAllAgents = async () => {
  const response = await axios.get(BASE_URL, config)
  console.log(response.data.records)
  return response.data.records
}
