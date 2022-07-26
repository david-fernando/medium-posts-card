import React from 'react'
import { renderToString } from 'react-dom/server'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { Carousel, fetchMedium } from '../../dist/index.esm.js'

const handlers = [
  rest.get('http://localhost:3333/carousel', async(request, response, context)=>{

    const data = await fetchMedium('davidfernandodamata21')

    const component = renderToString(
      <Carousel dataMedium={data} options={{ssr: true}} />
    )

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