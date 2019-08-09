'use strict'

class BaseRepository {
    constructor (Model) {
        this.Model = Model
      }
    async list({ request, response }) {
        const items = await this.Model.all()

        response.ok({
            status: 200,
            data: items
        })
    }
    async getBydId({ request, response, params }) {
        const post = await this.Model.findBy('id', params.id)

        return post
    }

    async create({ request, response }) {
        const data = request.only(['title', 'text'])
        const post = await this.Model.create(data)

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
    async remove({ params, request, response }) {
        const post = await Post.findBy('id', params.id)
        if (!post) {
            await response.badRequest('Lalala lelele')
        }else{
            await post.delete()
        }
  
    }
}
module.exports = BaseRepository
