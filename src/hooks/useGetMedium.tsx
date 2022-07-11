import { useState, useCallback } from 'react';
import useFetch from "use-http";
import useIsomophicEffect from "./useIsomophicEffect";
import mockMedium from '../mocks/dataMedium';

function useGetMedium(username: string){
  const [dataMedium, setDataMedium]: Array<any> = useState([]);
  const environment = process.env.NODE_ENV
  const isItaTestEnvironment = environment === 'test'
  const urlBase = 'https://mediumpostapi.herokuapp.com'

  const fetchOptions:any = { cachePolicy: "no-cache" };
  const { get } = useFetch(
    `${urlBase}/?usermedium=${username}`,
    fetchOptions
  );

  const getMedium = useCallback(async () => {
    if(isItaTestEnvironment){
      setDataMedium(mockMedium.data.dataMedium)
      return;
    }
    const data = await get("");
    setDataMedium(data.dataMedium);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get]);

  useIsomophicEffect(() => {
    getMedium();
  }, [getMedium]);

  return {
    dataMedium
  }

}

export default useGetMedium