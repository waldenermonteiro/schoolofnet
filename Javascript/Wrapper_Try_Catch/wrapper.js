const folkTale = require('folktale/Result')
exports.tryFn = async function tryFn(fn) {
    try {
        const resultFn = await fn()
        return folkTale.Ok(resultFn)
    } catch (err) {
        return folkTale.Error(err.message)
    }
}