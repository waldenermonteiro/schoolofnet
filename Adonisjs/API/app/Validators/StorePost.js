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
  static get name(){
    return 'Post'
  }
  static get inputs(){
    return ['title', 'text']
  }
  static get rules () {
    console.log(this.ctx)
    const userId = this.ctx.params.id
    return {
      title: `required|unique:posts,title,id,${userId}`,
      text: 'required'
    }
  }
  static get messages () {
    return {
      'title.required': 'O campo título é obrigatório',
      'title.unique': 'Já possui um post com esse título, por favor, escolha outro',
      'text.required': 'O campo texto é obrigatório',
    }
  }
}

module.exports = StorePost
