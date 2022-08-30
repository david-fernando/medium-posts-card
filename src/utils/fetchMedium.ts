const axios = require('axios')

async function fetchMedium(username){
  const baseUrl = 'https://mediumpostsapi.vercel.app'

  const response = await axios.get(`${baseUrl}/api/${username}`)
  const data = response.data
  return data
}

export default fetchMedium