function sayHello() {
    return 'Hello Man'
}

exports.main = async function main() {
    const hello = await sayHello()
    return console.log(hello)
}