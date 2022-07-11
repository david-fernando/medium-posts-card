import { useEffect } from 'react'

const isBrowser = typeof document !== 'undefined'

function useSSREffect(callback: () => any, dependecies: Array<any>){
  let dependecie = []
  if(dependecie[0] !== dependecies[0]){
    callback()
  }
  dependecie[0] = dependecies[0]
}

export default isBrowser ? useEffect : useSSREffect