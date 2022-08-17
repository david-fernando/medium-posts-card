import React from 'react'
import List from "../components/List";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: List
}

const options = {
  borderRadius: false,
  showTags: true,
  showDate: true,
  openInNewTab: true,
}

function Container({ children }){
  const container = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
  
  const content = {
    width: '80%',
    height: 'max-content',
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

export const Basic = (args) => <List {...args} />

Basic.args = { 
  username: "alex.streza",
  options,
  dataMedium: { disable: true }
}

export const Contained = () => <Container> <List username="alex.streza" /> </Container>

export const Placeholder = (args) => <List {...args} />

Placeholder.args = {
  username: "getmehiredbootcamp",
  options,
  dataMedium: { disable: true }
}
