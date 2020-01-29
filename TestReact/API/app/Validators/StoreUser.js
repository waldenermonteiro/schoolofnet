'use strict'
class StoreUser {
  get name(){
    return 'User'
  }
  get inputs(){
    return ['name', 'lastName', 'date', 'check']
  }
  rules (userId) {
    userId = userId || 0
    return {
      name: `required|unique:users,name,id,${userId}`,
      lastName: `required|unique:users,lastName,id,${userId}`,
      date: `required|date`,
      check: `required`,
    }
  }
}

module.exports = StoreUser
