import axios from 'axios'

describe('Rendering test of components on the server', () => {

  test('Should rendering carousel on server', async() => {

    const classCardContainer = 'Card_module_container__c1140499'
    
    const test = await axios.get('http://localhost:3333/carousel')
    
    const classSelected = await test.data.match(classCardContainer)[0]

    expect(classSelected).toBe(classCardContainer)
  })

  test('Should rendering list on server', async() => {

    const classCardContainer = 'RectangularCard_module_container__581567c0'
    
    const test = await axios.get('http://localhost:3333/list')
    
    const classSelected = await test.data.match(classCardContainer)[0]

    expect(classSelected).toBe(classCardContainer)
  })

})