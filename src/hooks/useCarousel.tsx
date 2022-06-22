import { useState } from 'react'

function useCarousel(){
  const [ moveRight, setMoveRight ] = useState(0)

  function moveForward(cardIsVisible: boolean) {
    if(!cardIsVisible){
      setMoveRight(moveRight + 21)
    }
  }

  function moveBack() {
    if(moveRight > 0){
      setMoveRight(moveRight - 21)
    }
  }

  return {
    moveRight,
    moveForward,
    moveBack,
  }

}

export default useCarousel