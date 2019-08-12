'use strict'
// const Validator = use('Validator')
// const Database = use('Database')
// const existsFn = async (data, field, message, args, get) => {
//     const value = get(data, field)
//     const [table, column] = args
//     const row = await Database.table(table).where(column, value).first()
//     if (row) {
//         throw message
//     }
// }
// Validator.extend('uniqueUpdate', existsFn)

class StorePost {
  get name(){
    return 'Post'
  }
  get inputs(){
    return ['title', 'text']
  }
  rules (postId) {
    postId = !postId ? 0 : postId
    return {
      title: `required|unique:posts,title,id,${postId}`,
      text: 'required'
    }
  }
  get messages () {
    return {
      'title.required': 'O campo título é obrigatório',
      'title.unique': 'Já possui um post com esse título, por favor, escolha outro',
      'text.required': 'O campo texto é obrigatório',
    }
  }
}

module.exports = StorePost
