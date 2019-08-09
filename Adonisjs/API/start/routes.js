'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Route.resource('posts', 'PostController').apiOnly()

Route.get('/posts', 'PostController.list')
Route.get('/posts/:id', 'PostController.getBydId')
Route.post('/posts', 'PostController.create')
Route.put('/posts/:id', 'PostController.update')
Route.delete('/posts/:id', 'PostController.remove')

Route.post('/auth', 'UserController.auth')
Route.post('/users', 'UserController.create')

