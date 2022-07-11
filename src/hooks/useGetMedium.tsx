import { useState } from 'react';
import axios from 'axios'
import useIsomophicEffect from "./useIsomophicEffect";
import useArray from './useArray';
import mockMedium from '../mocks/dataMedium';

function useGetMedium(username: string){
  const [dataMedium, setDataMedium]: Array<any> = useState([]);
  const { array } = useArray()
  const environment = process.env.NODE_ENV
  const isItaTestEnvironment = environment === 'test'
  const urlBase = 'https://mediumpostapi.herokuapp.com'

  const getMedium = async () => {
    const response = await axios.get(`${urlBase}/?usermedium=${username}`);
    const data = response.data.dataMedium
    setDataMedium(data);
  }

  useIsomophicEffect(() => {
    if(isItaTestEnvironment && array(dataMedium).isEmpty ){
        setDataMedium(mockMedium.data.dataMedium)
      return;
    }
    getMedium();
  }, [getMedium]);

  return {
    dataMedium
  }

}

export default useGetMedium