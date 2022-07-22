const axios = require('axios')

async function fetchMedium(username){
  const isBrowser = typeof window !== 'undefined'
  if(isBrowser){
    return;
  }
  const baseUrl = 'https://mediumpostapi.herokuapp.com'

  const response = await axios.get(`${baseUrl}/?usermedium=${username}`)
  const data = response.data
  return data
}

export default fetchMedium