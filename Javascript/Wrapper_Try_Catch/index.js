const { tryFn } = require('./wrapper')
const { testPromisse } = require('./promise')
const { main } = require('./async_function')
tryFn(async () => {
    console.log('try...catch')
})

testPromisse()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

main()