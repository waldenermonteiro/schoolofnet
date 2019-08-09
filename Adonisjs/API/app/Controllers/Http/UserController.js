'use strict'
const User = use('App/Models/User')
class UserController {
    async auth({ auth, request, response, params }) {
        const user = await User.find(params.id)
        const token = await auth.generate(user)
        return token
    }
    async list({ request, response }) {
        const users = await User.all()
        response.ok({
            status: 200,
            data: users
        })
    }
    async create({ auth, request, response }) {
        const data = request.only(['username', 'email', 'password'])
        const user = await User.create(data)
        const token = await auth.generate(user)

        return { user, token }
    }
    async index({ auth, request, response, params }) {
        response.json({ msg: "Hello from auth area" })
    }
}

module.exports = UserController
