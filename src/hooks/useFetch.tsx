import { useState, useEffect } from 'react';
import axios from 'axios'

function useFetch(url: string){
  const [ dataMedium, setDataMedium ] : Array<any> = useState([])
  
  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get(url)
      const data = response.data.dataMedium
      setDataMedium(data)
    }
    fetchData()
  }, [])

  return {
    dataMedium
  }
}

export default useFetch