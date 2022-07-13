import { useState, useEffect } from 'react';
import axios from 'axios'
import useArray from './useArray';
import mockMedium from '../mocks/dataMedium';

function useGetMedium(username: string, ssr: boolean){
  const [dataMedium, setDataMedium]: Array<any> = useState([]);
  const { array } = useArray()
  const environment = process.env.NODE_ENV
  const isItaTestEnvironment = environment === 'test'
  const urlBase = 'https://mediumpostapi.herokuapp.com'

  const getMedium = async () => {
    if(!array(dataMedium).isEmpty){
      return;
    }
    if(isItaTestEnvironment){
      setDataMedium(mockMedium.data.dataMedium)
      return;
    }
    const response = await axios.get(`${urlBase}/?usermedium=${username}`);
    const data = response.data.dataMedium
    setDataMedium(data);
  }

  if(ssr){
    (async()=> await getMedium())()
  }

  useEffect(() => {
    if(ssr){
      return;
    }
    getMedium();
  }, [getMedium]);

  return {
    dataMedium
  }

}

export default useGetMedium