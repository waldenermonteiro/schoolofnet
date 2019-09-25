const person = {
    id: 123,
    name: 'Leonan Luppi',
    age: 23
}
const objHandler = {
    get: function(obj, props) {
        console.log('Get function executed by Proxy')
    }
}

const proxy = new Proxy(person, objHandler )
console.log(proxy.name)