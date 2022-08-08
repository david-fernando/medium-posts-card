import React from 'react'
import Carousel from "../components/Carousel";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Carousel
}

function Container({ children }){
  const container = {
    width: '100%',
    height: 'min-content',
    display: 'flex',
    justifyContent: 'center'
  }
  
  const content = {
    width: '80%',
    height: 'max-content',
    border: '1px #9b8f8f dashed'
  }

  return (
    <div style={container}>
      <div style={content}>
        {
          children
        }
      </div>
    </div>
  )
}

export const Basic = (args) => <Carousel {...args} />
export const withContainer = () => <Container> <Carousel username="alex.streza" /> </Container>

Basic.args = { 
  username: "alex.streza",
  options: {
    borderRadius: true,
    showTags: false,
    showDate: false,
    openInNewTab: true,
  },
  dataMedium: { disable: true }
 }