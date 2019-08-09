'use strict'

const Post = use('App/Models/Post')
const BaseController = use('App/Controllers/Http/BaseController')
class PostController extends BaseController {
    constructor () {
        super(Post)
      }
}
module.exports = PostController
