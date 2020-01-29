'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Route.resource('posts', 'PostController').apiOnly()
Route.group('v1', function () {
    Route.get('/users', 'UserController.list')
    Route.get('/users/:id', 'UserController.getBydId')
    Route.put('/users/:id', 'UserController.update')
    Route.delete('/users/:id', 'UserController.remove')
    Route.post('/users', 'UserController.create')
}).prefix('api/v1')


