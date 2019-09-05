const request = require('request')
exports.testPromisse = function getData() {
   
    return new Promise(function (resolve, reject) {
        request('http://echo.jsontest.com/key/value/one/two', function (error, response, body) {
            if (error) {
                reject(error)
            }
            resolve(body)
        })
    })
}