import axios from 'axios'

describe('Rendering test of components on the server', () => {

  test('Should rendering carousel on server', async() => {

    const classCardContainer = 'Card_module_container__bd43ad53'
    
    const test = await axios.get('http://localhost:3333/carousel')
    
    const classSelected = await test.data.match(classCardContainer)[0]

    expect(classSelected).toBe(classCardContainer)
  })

  test('Should rendering list on server', async() => {

    const classCardContainer = 'RectangularCard_module_container__e8f8839b'
    
    const test = await axios.get('http://localhost:3333/list')
    
    const classSelected = await test.data.match(classCardContainer)[0]

    expect(classSelected).toBe(classCardContainer)
  })

  test('Should rendering wrapped carousel on label', async() => {

    const classCardContainer = 'Label_module_container__ee32c7c2'
    
    const test = await axios.get('http://localhost:3333/wrapcarousel')
    
    const classSelected = await test.data.match(classCardContainer)[0]

    expect(classSelected).toBe(classCardContainer)
  })

  test('Should rendering wrapped list on label', async() => {

    const classCardContainer = 'Label_module_container__ee32c7c2'
    
    const test = await axios.get('http://localhost:3333/wraplist')
    
    const classSelected = await test.data.match(classCardContainer)[0]

    expect(classSelected).toBe(classCardContainer)
  })

})