import { useState, useEffect } from 'react';
import useArray from './useArray';
import fetchMedium from '../utils/fetchMedium';

function useGetMedium(username?: string, ssr?: boolean){
  const [dataMedium, setDataMedium]:Array<any> = useState([]);
  const { array } = useArray()

  useEffect(() => {
    if(!array(dataMedium).isEmpty || ssr){
      return;
    }
    (async()=>{
      const data = await fetchMedium(username)
      setDataMedium(data.dataMedium)
    })()
  }, [fetchMedium]);

  return dataMedium

}

export default useGetMedium