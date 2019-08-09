'use strict'
const BaseRepository = use('App/Repositories/BaseRepository')
class BaseController {
    constructor (Model) {
        this.Model = Model
        this.BaseRepository = new BaseRepository(Model)
      }
    async list({ request, response }) {
        return await this.BaseRepository.list({ response })
    }
    async getBydId({ request, response, params }) {
        return await this.BaseRepository.getBydId({ response, params })
    }

    async create({ request, response }) {
        return await this.BaseRepository.create({ request, response })
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
module.exports = BaseController
