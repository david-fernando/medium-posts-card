function useSSREffect(callback: () => any, dependecies: Array<any>){
  let dependecie = []
  if(dependecie[0] !== dependecies[0]){
    try{
      callback()
    }catch(error){
      console.log(error)
    }
  }
  dependecie[0] = dependecies[0]
}

export default useSSREffect