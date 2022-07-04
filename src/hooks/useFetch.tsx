import { useState } from 'react';
import { useIsomorphicEffect } from "rooks";
import axios from 'axios'

function useFetch(url: string){
  const [ dataMedium, setDataMedium ] : Array<any> = useState([])
  
  useIsomorphicEffect(()=>{
    async function fetchData(){
      const response = await axios.get(url)
      const data = response.data.dataMedium
      setDataMedium(data)
    }
    fetchData()
  }, [url])

  return {
    dataMedium
  }
}

export default useFetch