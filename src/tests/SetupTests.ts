import server from '../mocks/server'
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }))
afterAll(() => server.close())