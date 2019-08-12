'use strict'

class StorePost {
  static get name(){
    return 'Post'
  }
  static get inputs(){
    return ['title', 'text']
  }
  static get rules () {
    return {
      title: 'required',
      text: 'required'
    }
  }
  static get messages () {
    return {
      'title.required': 'O campo título é obrigatório',
      'text.required': 'O campo texto é obrigatório',
    }
  }
}

module.exports = StorePost
