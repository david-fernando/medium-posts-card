import axios from 'axios'

describe('Rendering test of components on the server', () => {

  test('Should rendering card inside carousel on server', async() => {

    const test = await axios.get('http://localhost:3333/carousel')

    console.log(test.data)
  })

})