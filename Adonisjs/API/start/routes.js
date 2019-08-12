'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Route.resource('posts', 'PostController').apiOnly()
Route.group('v1', function () {
    Route.get('/posts', 'PostController.list').middleware('auth')
    Route.get('/posts/:id', 'PostController.getBydId')
    Route.post('/posts', 'PostController.create')
    Route.put('/posts/:id', 'PostController.update').validator('StorePost')
    Route.delete('/posts/:id', 'PostController.remove')
}).prefix('api/v1')

Route.get('/secure', 'UserController.index').middleware('auth')
Route.get('/auth/:id', 'UserController.auth')
Route.get('/users', 'UserController.list')
Route.post('/users', 'UserController.create')

