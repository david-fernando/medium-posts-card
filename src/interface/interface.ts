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

interface Medium {
  dataMedium: {
    dataMedium: any
  }
}

interface Props {
  username?: User["username"],
  dataMedium?: Medium["dataMedium"],
  options?: Options["options"],
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
  CardProps,
  ServerSideProps
}