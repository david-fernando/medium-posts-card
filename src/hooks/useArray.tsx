function useArray(){
  function array(array: any[]){
    const isEmpty = (array.length === 0)? true : false

    return {
      isEmpty
    }
  }

  return {
    array
  }
}

export default useArray