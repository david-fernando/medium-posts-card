function useSSREffect(callback: () => any, dependecies: Array<any>){
  const isServer = typeof document === 'undefined'
  if(!isServer){
    return;
  }
  try{
    callback()
  }catch(error){
    console.log(error)
  }
}

export default useSSREffect