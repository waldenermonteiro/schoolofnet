'use strict'
class StoreUser {
  get name(){
    return 'User'
  }
  get inputs(){
    return ['username', 'email', 'password']
  }
  get inputsLogin(){
    return ['email', 'password']
  }
  rules (userId) {
    userId = userId || 0
    return {
      username: `required|unique:users,username,id,${userId}`,
      email: `required|unique:users,email,id,${userId}`,
      password: 'required'
    }
  }
  get rulesLogin () {
    return {
      email: `required`,
      password: 'required'
    }
  }
  get messages () {
    return {
      'username.required': 'O campo nome é obrigatório',
      'username.unique': 'Já possui um usuário com esse nome, por favor, escolha outro',
      'email.required': 'O campo email é obrigatório',
      'email.unique': 'Já possui um usuário com esse email, por favor, escolha outro',
      'password.required': 'O campo senha é obrigatório',
    }
  }
}

module.exports = StoreUser
