'use strict'
const User = use('App/Models/User')
const StoreUser = use('App/Validators/storeUser')
const BaseController = use('App/Controllers/Http/BaseController')
const UserRepository = use('App/Repositories/UserRepository')

class UserController extends BaseController {
    constructor() {
        super(User, StoreUser)
        this.UserRepository = new UserRepository(User, StoreUser)
    }
}

module.exports = UserController
