import { useEffect, useState } from "react"

function useIsVisible(container: any, element: any){
  const [ isVisible, setIsVisible ] = useState(false)
  const [ elementPosition, setElementPosition ] = useState(0)
  const [ containerWidth, setContainerWidth ] = useState(0)

  const elementDefaultValue = { x: 0 }
  const containerDefaultValue = { width: 0 }
  const timeInMiliseconds = 20
  const excess = 90

  setTimeout(()=>{
    const { x } = element.current?.getBoundingClientRect?.() || elementDefaultValue
    setElementPosition(x)
    const { width } = container.current?.getBoundingClientRect?.() || containerDefaultValue
    setContainerWidth(width)
  }, timeInMiliseconds)

  useEffect(()=>{
    determineIfElementIsVisible()
    // eslint-disable-next-line 
  }, [elementPosition])

  function determineIfElementIsVisible(){
    const isElementVisible = (elementPosition + excess < containerWidth)? true : false

    setIsVisible(isElementVisible)
  }

  return isVisible
}

export default useIsVisible