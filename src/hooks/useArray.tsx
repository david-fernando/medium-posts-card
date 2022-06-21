function useArray(){
  function arrayIsEmpty(array: any[]){
    return (array.length === 0)? true : false
  }

  return {
    arrayIsEmpty
  }
}

export default useArray