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
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ session, view }) => {
//   return view.render('welcome', {
//     userLanguage: session.get('userLanguage'),
//   })
// })

Route.get('/', async ({ request }) => {
  return request.country
    ? `Your country is ${request.country}`
    : 'Unable to detect country'
})

Route.get('/language/:name', async ({ session, params, response }) => {
  session.put('userLanguage', params.name)
  response.redirect('back')
})

Route.get('/about', async () => {
  return 'This is the about page'
})

Route.get('/contact', async () => {
  return 'This is the contact page'
})

Route.get('users', 'UsersController.index')

Route.on('users/create').render('users/create')
Route.post('users', 'UsersController.store')

// Route.get('/posts', async ({ view }) => {
//   const posts = [
//     {
//       id: 1,
//       title: 'Getting Started with AdonisJS',
//       body: '',
//     },
//     {
//       id: 2,
//       title: 'Covering Basics of Lucid ORM',
//       body: '',
//     },
//     {
//       id: 3,
//       title: 'Understanding Build Process',
//       body: '',
//     }
//   ]

//   return view.render('posts/index', { posts })
// })

Route
  .get('posts', async () => {
    return 'List posts'
  })
  .middleware('acl:user,moderator')

Route
  .get('subscribers', async () => {
    return 'List subscribers'
  })
  .middleware('acl:moderator,admin')

Route.get('posts/create', 'PostsController.create')
Route.post('posts', 'PostsController.store')

// Route.resource('posts', 'PostsController')

Route.get('/signup', async ({ view }) => {
  return view.render('signup')
})

Route
  .resource('comments', 'CommentsController')
  .except(['update', 'destroy']) 

Route.resource('posts.comments', 'CommentsController')