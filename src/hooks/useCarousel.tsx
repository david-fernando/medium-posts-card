import { useState } from 'react'

function useCarousel(){
  const [ position, setPosition ] = useState(0)

  const cardWidth = 19

  function moveForward(cardIsVisible: boolean) {
    if(!cardIsVisible){
      setPosition(position + cardWidth)
    }
  }

  function moveBack() {
    if(position > 0){
      setPosition(position - cardWidth)
    }
  }

  return {
    position,
    moveForward,
    moveBack,
  }

}

export default useCarousel