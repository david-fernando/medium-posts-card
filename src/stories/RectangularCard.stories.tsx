import React from "react";
import RectangularCard from '../components/RectangularCard'
import cardData from "../mocks/cardData";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: RectangularCard
}

export const Basic = (args) => <RectangularCard {...args} />

Basic.args = { 
  userdata: cardData,
  options: {
    borderRadius: false,
    showTags: true,
    showDate: true
  }
}