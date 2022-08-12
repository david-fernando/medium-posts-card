import React from 'react'
import Card from '../components/Card'
import cardData from '../mocks/cardData'


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Card
}

export const Basic = (args) => <Card {...args} />

Basic.args = { 
  userdata: cardData,
  options: {
    borderRadius: true,
    showTags: false,
    showDate: false
  }
}