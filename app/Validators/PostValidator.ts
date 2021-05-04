import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class PostValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    title: schema.string(),
    body: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'title.required': 'Please enter post title',
    'body.required': 'Please enter post body',
  }
}