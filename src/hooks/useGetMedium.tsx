import { useState, useEffect } from 'react';
import axios from 'axios'
import useArray from './useArray';


function useGetMedium(username?: string, ssr?: boolean){
  const [dataMedium, setDataMedium]:Array<any> = useState([]);
  const { array } = useArray()

  async function fetchMedium(){
    const baseUrl = 'https://mediumpostapi.herokuapp.com'
  
    const response = await axios.get(`${baseUrl}/?usermedium=${username}`)
    const data = response.data.dataMedium
    setDataMedium(data)
  }

  useEffect(() => {
    if(!array(dataMedium).isEmpty || ssr){
      return;
    }
    fetchMedium()
  }, [fetchMedium]);

  return dataMedium

}

export default useGetMedium