import { useState } from 'react'

function useCarousel(){
  const [ moveRight, setMoveRight ] = useState(0)

  const cardWidth = 19

  function moveForward(cardIsVisible: boolean) {
    if(!cardIsVisible){
      setMoveRight(moveRight + cardWidth)
    }
  }

  function moveBack() {
    if(moveRight > 0){
      setMoveRight(moveRight - cardWidth)
    }
  }

  return {
    moveRight,
    moveForward,
    moveBack,
  }

}

export default useCarousel