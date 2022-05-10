/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/hello-world', async ({ view }) => {
  const html = await view.render('hello-world', {
    name: 'Victor de Souza Magaldi',
  })
  return html
})

Route.get('/user/:id', async ({ response, request }) => {
  response.send({ 'route-params': request?.params(), 'query-params': request?.qs() })
})
