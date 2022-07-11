import React from 'react'
import { renderToString } from 'react-dom/server'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Carousel from '../../build-test/components/Carousel'

const handlers = [
  rest.get('http://localhost:3333/carousel', (request, response, context)=>{

    const component = renderToString(<Carousel username='davidfernandodamata21' />)

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Carousel SSR</title>
    </head>
    <body>
      <div id="app">
        ${component}
      </div>
    </body>
    </html>`

    return response(
      context.xml(html)
    )
  })
]

const server = setupServer(...handlers)

export default server