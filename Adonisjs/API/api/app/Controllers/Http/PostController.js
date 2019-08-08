'use strict'

const Post = use('App/Models/Post')

class PostController {

    async list({ request, response }) {
        const posts = await Post.all()

        return posts
    }
    async getBydId({ request, response, params }) {
        const post = await Post.findBy('id', params.id)

        return post
    }

    async create({ request, response }) {
        const data = request.only(['title', 'text'])
        const post = await Post.create(data)

        return post
    }
    async update({ params, request, response }) {
        const data = request.only([
            'title',
            'text'
        ])
        const post = await Post.findOrFail(params.id)
        await post.merge(data)
        await post.save()

        return post
    }
}
module.exports = PostController
