'use strict'
const User = use('App/Models/User')
class UserController {
    async auth({ auth, request, response, params }) {
        const user = await User.find(params.id)
        const token = await auth.generate(user)
        return token
    }
    /**
* @swagger
* /users:
*   get:
*     tags:
*       - Test
*     summary: Sample API
*     parameters:
*       - name: name
*         description: Name of the user
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           message: Hello Guess
*/
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
