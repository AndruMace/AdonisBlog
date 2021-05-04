import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SampleMiddleware {
  public async handle (ctx: HttpContextContract, next) {
   console.log(`Inside middleware ${ctx.request.url()}`)
   await next()
  }
}
}
