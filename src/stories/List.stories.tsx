import React from 'react'
import List from "../components/List";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: List
}

const options = {
  borderRadius: true,
  showTags: false,
  showDate: false,
  openInNewTab: true,
}

export const Basic = (args) => <List {...args} />

Basic.args = { 
  username: "alex.streza",
  options,
  dataMedium: { disable: true }
}

export const Placeholder = (args) => <List {...args} />

Placeholder.args = {
  username: "getmehiredbootcamp",
  options,
  dataMedium: { disable: true }
}
