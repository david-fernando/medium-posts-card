import { useState } from 'react'

function useCarousel(){
  const [ position, setPosition ] = useState(0)

  const displacement = 19

  function moveForward(cardIsVisible: boolean) {
    if(!cardIsVisible){
      setPosition(position + displacement)
    }
  }

  function moveBack() {
    if(position > 0){
      setPosition(position - displacement)
    }
  }

  return {
    position,
    moveForward,
    moveBack,
  }

}

export default useCarousel