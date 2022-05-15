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
import path from 'path'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/hello-world', async ({ view }) => {
  const html = await view.render('hello-world', {
    name: 'Victor de Souza Magaldi',
  })
  return html
})

Route.get('/list', async ({ view }) => {
  const html = await view.render('list', {
    list: ['Victor de Souza Magaldi', 'Victor de Souza Magaldi 2', 'Victor de Souza Magaldi 3'],
  })
  return html
})

Route.get('/user/:id', async ({ response, request }) => {
  response.send({ 'route-params': request?.params(), 'query-params': request?.qs() })
})

Route.get('/post-controller', 'PostsController.index')

Route.post('/post-image', async ({ request }) => {
  const thumbnail = request.file('thumbnail')

  if (thumbnail) {
    await thumbnail.moveToDisk(path.resolve(__dirname, '..', 'public', 'assets'), {
      name: String(new Date().getTime()) + '-' + thumbnail?.clientName,
      contentType: 'image/png',
    })
  }
  return { saved: true }
})

Route.post('add-to-cart', async ({ request, response }) => {
  const existingItems = request.cookie('outro', [])

  console.log('teste ', existingItems)
  const newItems = existingItems.concat([{ id: 10 }])
  response.cookie('outro', newItems)
})

Route.get('/session', async ({ session }) => {
  // Read value
  const cartTotal = session.get('cart_total')
  console.log('Cart Total ', cartTotal)
  // Write value
  session.put('cart_total', cartTotal + 10)
})
