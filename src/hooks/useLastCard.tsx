function useLastCard(){
  function returnLastCard(cardItem: number, dataMedium: any[], element: any){
    const numberOfCards = dataMedium.length - 1
    const lastCard = (cardItem === numberOfCards)? element : null
  
    return lastCard
  }

  return {
    returnLastCard
  }
}

export default useLastCard