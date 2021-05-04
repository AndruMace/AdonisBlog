import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'

export default class UserValidator {
  constructor (private ctx: HttpContextContract) {
  }

	public schema = schema.create({
		email: schema.string(),
		avatar: schema.file({
			size: '2mb',
			extnames: ['jpg', 'png', 'jpeg'],
		}),
	})

  public cacheKey = this.ctx.routeKey

  public messages = {
    'email.required': 'Please enter your email',
    'avatar.required': 'Please upload avatar',
  }
}