function useBlankSpace(tagArray: any[]){
  const tags = tagArray.map((item: string, index: number) => item.concat(' '))

  return {
    tags
  }
}

export default useBlankSpace