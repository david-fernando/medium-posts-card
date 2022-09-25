import React from 'react'
import Label from '../components/Label'
import Carousel from '../components/Carousel'
import List from '../components/List'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Label
}

export const WrapCarousel = (args)=> <Label {...args}> <Carousel username="alex.streza" /> </Label>
export const WrapList = (args)=> <Label {...args}> <List username="alex.streza" /> </Label>

WrapCarousel.args = {
  text: 'Medium Articles'
}

WrapList.args = {
  text: 'Medium Articles'
}