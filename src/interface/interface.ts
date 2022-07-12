interface Options {
  options?: {
    borderRadius?: boolean,
    showTags?: boolean,
    showDate?: boolean,
    openInNewTab?: boolean,
    ssr?: boolean
  }
}

interface User {
  username: string
}

interface Props {
  username: User["username"],
  options?: Options["options"]
}

interface UserData {
  data: {
    title: string,
    date: string,
    image: string,
    description: string,
    tags: Array<string>
  }
}

interface CardProps {
  userdata: UserData["data"],
  options?: Options["options"]
}

export {
  Props,
  Options,
  User,
  CardProps
}