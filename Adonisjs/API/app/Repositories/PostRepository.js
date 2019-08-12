'use strict'
const BaseRepository = use('App/Repositories/BaseRepository')
const { validateAll } = use('Validator')
class PostRepository extends BaseRepository {
    constructor(Model, Validator) {
        super(Model, Validator)
        this.Model = Model
        this.Validator = Validator
    }
}
module.exports = PostRepository
