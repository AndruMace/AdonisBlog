import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'
import Application from '@ioc:Adonis/Core/Application'

export default class UsersController {
  public async store ({ request }: HttpContextContract) {

    const data = await request.validate(UserValidator)

    await data.avatar.move(Application.tmpPath('uploads'))
    return 'File uploaded successfully'
  }
}