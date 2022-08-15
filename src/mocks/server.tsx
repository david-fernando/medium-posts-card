import React from 'react'
import { renderToString } from 'react-dom/server'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import html from '../utils/htmlStructure'

import { Carousel, List, fetchMedium } from '../../dist/index.esm.js'

const handlers = [
  rest.get('http://localhost:3333/carousel', async(request, response, context)=>{

    const data = await fetchMedium('davidfernandodamata21')

    const component = renderToString(
      <Carousel dataMedium={data} options={{ssr: true}} />
    )

    return response(
      context.xml(html(component))
    )
  }),

  rest.get('http://localhost:3333/list', async(request, response, context)=>{

    const data = await fetchMedium('davidfernandodamata21')

    const component = renderToString(
      <List dataMedium={data} options={{ssr: true}} />
    )

    return response(
      context.xml(html(component))
    )
  })
]

const server = setupServer(...handlers)

export default server