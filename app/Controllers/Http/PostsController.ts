import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index({ response }: HttpContextContract) {
    response.send([
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ])
  }
}
