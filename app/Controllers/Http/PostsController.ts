import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
  public async create ({ view }: HttpContextContract) {
    return view.render('posts/create')
  }

  public async store ({ request, response, session }: HttpContextContract) {
    const data = await request.validate(PostValidator)

    console.log(data)
    // session.flash('success', 'Post created successfully')
    // or an object
    session.flash({
      success: 'Post has been created',
    })
    response.redirect('back')
  }
}