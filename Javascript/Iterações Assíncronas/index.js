(async () => {
    const asyncAction = (a) => new Promise(b => setTimeout(b, a))
    const arr = [
        {
            id: 1,
            text: 'text1'
        },
        {
            id: 2,
            text: 'text2'
        },
        {
            id: 3,
            text: 'text3'
        }
    ]
    for (let obj of arr) {
        await asyncAction(1000)
        console.log(obj)
    }
    console.log('done for of')

    arr.forEach( async (a) => {
        await asyncAction(1000)
        console.log(a)
    })
    console.log('done foreach')
})()
