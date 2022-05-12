import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index(ctx: HttpContextContract) {
    console.log('ctx', ctx)
    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
  }
}
