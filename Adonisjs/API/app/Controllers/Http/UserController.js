'use strict'
const User = use('App/Models/User')
class UserController {
    async auth({ request, response }) {

    }
    async create({ auth, request, response }) {
        const data = request.only(['username', 'email', 'password'])
        const user = await User.create(data)
        const token = await auth.generate(user)

        return { user, token }
    }
}

module.exports = UserController
