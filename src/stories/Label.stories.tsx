import React from 'react'
import Label from '../components/Label'
import Carousel from '../components/Carousel'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Label
}

export const WrapCarousel = ()=> <Label> <Carousel username="alex.streza" /> </Label>