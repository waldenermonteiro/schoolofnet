let incrementar = function () {
    var i = 0
    return function () {
        i++
        return i
    }
}
let add = incrementar()
console.log(add())
console.log(add())
console.log(add())